'use strict';

const assert = require('bsert');
const random = require('bcrypto/lib/random');
const CoinView = require('../lib/coins/coinview');
const WalletCoinView = require('../lib/wallet/walletcoinview');
const Coin = require('../lib/primitives/coin');
const MTX = require('../lib/primitives/mtx');
const Path = require('../lib/wallet/path');
const MemWallet = require('./util/memwallet');

const mtx1json = require('./data/mtx1.json');
const mtx2json = require('./data/mtx2.json');
const mtx1 = MTX.fromJSON(mtx1json);
const mtx2 = MTX.fromJSON(mtx2json);

function dummyCoin(address, value) {
  const hash = random.randomBytes(32);
  const index = 0;

  return new Coin({address, value, hash, index});
}

describe('MTX', function() {
  it('should serialize wallet coin view', () => {
    const json = mtx1.getJSON('regtest');
    const got = json.inputs[0].path;
    const want = {
      name: 'default',
      account: 0,
      change: false,
      derivation: 'm/44\'/5355\'/0\'/0/0'
    };

    assert.deepStrictEqual(got, want);
  });

  it('should deserialize wallet coin view', () => {
    const view = mtx1.view;
    const input = mtx1.inputs[0];
    const got = view.getPathFor(input);
    const want = new Path();
    want.name = 'default';
    want.account = 0;
    want.branch = 0;
    want.index = 0;

    assert.ok(view instanceof WalletCoinView);
    assert.deepStrictEqual(got, want);
  });

  it('should serialize coin view', () => {
    const json = mtx2.getJSON('regtest');
    const got = json.inputs[0].path;
    const want = undefined;

    assert.deepStrictEqual(got, want);
  });

  it('should deserialize coin view', () => {
    const view = mtx2.view;
    const input = mtx2.inputs[0];
    const got = view.getPathFor(input);
    const want = null;

    assert.ok(view instanceof CoinView);
    assert.deepStrictEqual(got, want);
  });

  describe('Fund', function() {
    const wallet1 = new MemWallet();
    const wallet2 = new MemWallet();

    const coins1 = [
      dummyCoin(wallet1.getAddress(), 1_000_000),
      dummyCoin(wallet1.getAddress(), 1_000_000),
      dummyCoin(wallet1.getAddress(), 1_000_000)
    ];

    it('should fund mtx', async () => {
      const mtx = new MTX();

      mtx.addOutput(wallet2.getAddress(), 1_500_000);

      await mtx.fund(coins1, {
        changeAddress: wallet1.getChange()
      });

      assert.strictEqual(mtx.inputs.length, 2);
      assert.strictEqual(mtx.outputs.length, 2);
    });

    it('should fund with owned preferred inputs w/o coinview', async () => {
      // If the input does not have a coin in the coinview
      // but it is part of the coins list, it should be resolved
      // from the list.

      const mtx = new MTX();

      const coin = coins1[0];
      mtx.addInput({
        prevout: {
          hash: coin.hash,
          index: coin.index
        }
      });

      mtx.addOutput(wallet2.getAddress(), 1_500_000);

      await mtx.fund(coins1, {
        changeAddress: wallet1.getChange()
      });

      assert.strictEqual(mtx.inputs.length, 2);
      assert.strictEqual(mtx.outputs.length, 2);
      assert.strictEqual(mtx.view.hasEntry({
        hash: coin.hash,
        index: coin.index
      }), true);
    });

    it('should fund with owner inputs with coin in coinview', async () => {
      const mtx = new MTX();

      const coin = coins1[0];

      mtx.addCoin(coin);
      mtx.addOutput(wallet2.getAddress(), 1_500_000);

      await mtx.fund(coins1, {
        changeAddress: wallet1.getChange()
      });

      assert.strictEqual(mtx.inputs.length, 2);
      assert.strictEqual(mtx.outputs.length, 2);

      assert.bufferEqual(mtx.inputs[0].prevout.hash, coin.hash);
      assert.strictEqual(mtx.inputs[0].prevout.index, coin.index);
    });

    it('should fail fund w/o coin in CoinView', async () => {
      const mtx = new MTX();

      mtx.addInput({
        prevout: {
          hash: random.randomBytes(32),
          index: 0
        }
      });

      mtx.addOutput(wallet2.getAddress(), 1_000_000);

      let err;
      try {
        await mtx.fund(coins1, {
          changeAddress: wallet1.getChange()
        });
      } catch (e) {
        err = e;
      }

      assert(err, 'fund should fail without coin info');
      assert(err.message, 'Could not resolve preferred inputs.');
    });

    it('should fund with coin in the CoinView', async () => {
      const mtx = new MTX();

      const coin = dummyCoin(wallet2.getAddress(), 1_000_000);

      mtx.addCoin(coin);
      mtx.addOutput(wallet2.getAddress(), 1_500_000);

      await mtx.fund(coins1, {
        changeAddress: wallet1.getChange()
      });

      assert.strictEqual(mtx.inputs.length, 2);
      assert.strictEqual(mtx.outputs.length, 2);

      assert.bufferEqual(mtx.inputs[0].prevout.hash, coin.hash);
      assert.strictEqual(mtx.inputs[0].prevout.index, coin.index);
    });
  });
});
