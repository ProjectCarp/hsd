export const types: string[];
export const main: any;
export namespace testnet {
    const type: string;
    const seeds: string[];
    const magic: number;
    const port: number;
    const brontidePort: number;
    const checkpointMap: {};
    const lastCheckpoint: number;
    const halvingInterval: number;
    const coinbaseMaturity: number;
    const genesis: {
        version: number;
        hash: Buffer;
        prevBlock: Buffer;
        merkleRoot: Buffer;
        witnessRoot: Buffer;
        treeRoot: Buffer;
        reservedRoot: Buffer;
        time: number;
        bits: number;
        nonce: number;
        extraNonce: Buffer;
        mask: Buffer;
        height: number;
        magic: number;
    };
    const genesisBlock: Buffer;
    namespace pow {
        const limit: any;
        const bits: number;
        const chainwork: any;
        const targetWindow: number;
        const targetSpacing: number;
        const blocksPerDay: number;
        const targetTimespan: number;
        const minActual: number;
        const maxActual: number;
        const targetReset: boolean;
        const noRetargeting: boolean;
    }
    const txStart: number;
    namespace names {
        const auctionStart: number;
        const rolloutInterval: number;
        const lockupPeriod: number;
        const renewalWindow: number;
        const renewalPeriod: number;
        const renewalMaturity: number;
        const claimPeriod: number;
        const claimFrequency: number;
        const biddingPeriod: number;
        const revealPeriod: number;
        const treeInterval: number;
        const transferLockup: number;
        const revocationDelay: number;
        const auctionMaturity: number;
        const noRollout: boolean;
        const noReserved: boolean;
    }
    namespace block {
        const pruneAfterHeight: number;
        const keepBlocks: number;
        const maxTipAge: number;
        const slowHeight: number;
    }
    const goosigStop: number;
    const activationThreshold: number;
    const minerWindow: number;
    namespace deployments {
        namespace hardening {
            const name: string;
            const bit: number;
            const startTime: number;
            const timeout: number;
            const threshold: number;
            const window: number;
            const required: boolean;
            const force: boolean;
        }
        namespace testdummy {
            const name_1: string;
            export { name_1 as name };
            const bit_1: number;
            export { bit_1 as bit };
            const startTime_1: number;
            export { startTime_1 as startTime };
            const timeout_1: number;
            export { timeout_1 as timeout };
            const threshold_1: number;
            export { threshold_1 as threshold };
            const window_1: number;
            export { window_1 as window };
            const required_1: boolean;
            export { required_1 as required };
            const force_1: boolean;
            export { force_1 as force };
        }
    }
    const deploys: {
        name: string;
        bit: number;
        startTime: number;
        timeout: number;
        threshold: number;
        window: number;
        required: boolean;
        force: boolean;
    }[];
    namespace keyPrefix {
        const privkey: number;
        const xpubkey: number;
        const xprivkey: number;
        const xpubkey58: string;
        const xprivkey58: string;
        const coinType: number;
    }
    const addressPrefix: string;
    const requireStandard: boolean;
    const rpcPort: number;
    const walletPort: number;
    const nsPort: number;
    const rsPort: number;
    const minRelay: number;
    const feeRate: number;
    const maxFeeRate: number;
    const identityKey: any;
    const selfConnect: boolean;
    const requestMempool: boolean;
    const claimPrefix: string;
    const deflationHeight: number;
}
export namespace regtest {
    const type_1: string;
    export { type_1 as type };
    const seeds_1: any[];
    export { seeds_1 as seeds };
    const magic_1: number;
    export { magic_1 as magic };
    const port_1: number;
    export { port_1 as port };
    const brontidePort_1: number;
    export { brontidePort_1 as brontidePort };
    const checkpointMap_1: {};
    export { checkpointMap_1 as checkpointMap };
    const lastCheckpoint_1: number;
    export { lastCheckpoint_1 as lastCheckpoint };
    const halvingInterval_1: number;
    export { halvingInterval_1 as halvingInterval };
    const coinbaseMaturity_1: number;
    export { coinbaseMaturity_1 as coinbaseMaturity };
    const genesis_1: {
        version: number;
        hash: Buffer;
        prevBlock: Buffer;
        merkleRoot: Buffer;
        /**
         * Genesis block header.
         * @const {Object}
         */
        witnessRoot: Buffer;
        treeRoot: Buffer;
        reservedRoot: Buffer;
        time: number;
        bits: number;
        nonce: number;
        extraNonce: Buffer;
        mask: Buffer;
        height: number;
        magic: number;
    };
    export { genesis_1 as genesis };
    const genesisBlock_1: Buffer;
    export { genesisBlock_1 as genesisBlock };
    export namespace pow {
        const limit_1: any;
        export { limit_1 as limit };
        const bits_1: number;
        export { bits_1 as bits };
        const chainwork_1: any;
        export { chainwork_1 as chainwork };
        const targetWindow_1: number;
        export { targetWindow_1 as targetWindow };
        const targetSpacing_1: number;
        export { targetSpacing_1 as targetSpacing };
        const blocksPerDay_1: number;
        export { blocksPerDay_1 as blocksPerDay };
        const targetTimespan_1: number;
        export { targetTimespan_1 as targetTimespan };
        const minActual_1: number;
        export { minActual_1 as minActual };
        const maxActual_1: number;
        export { maxActual_1 as maxActual };
        const targetReset_1: boolean;
        export { targetReset_1 as targetReset };
        const noRetargeting_1: boolean;
        export { noRetargeting_1 as noRetargeting };
    }
    const txStart_1: number;
    export { txStart_1 as txStart };
    export namespace names_1 {
        const auctionStart_1: number;
        export { auctionStart_1 as auctionStart };
        const rolloutInterval_1: number;
        export { rolloutInterval_1 as rolloutInterval };
        const lockupPeriod_1: number;
        export { lockupPeriod_1 as lockupPeriod };
        const renewalWindow_1: number;
        export { renewalWindow_1 as renewalWindow };
        const renewalPeriod_1: number;
        export { renewalPeriod_1 as renewalPeriod };
        const renewalMaturity_1: number;
        export { renewalMaturity_1 as renewalMaturity };
        const claimPeriod_1: number;
        export { claimPeriod_1 as claimPeriod };
        const claimFrequency_1: number;
        export { claimFrequency_1 as claimFrequency };
        const biddingPeriod_1: number;
        export { biddingPeriod_1 as biddingPeriod };
        const revealPeriod_1: number;
        export { revealPeriod_1 as revealPeriod };
        const treeInterval_1: number;
        export { treeInterval_1 as treeInterval };
        const transferLockup_1: number;
        export { transferLockup_1 as transferLockup };
        const revocationDelay_1: number;
        export { revocationDelay_1 as revocationDelay };
        const auctionMaturity_1: number;
        export { auctionMaturity_1 as auctionMaturity };
        const noRollout_1: boolean;
        export { noRollout_1 as noRollout };
        const noReserved_1: boolean;
        export { noReserved_1 as noReserved };
    }
    export { names_1 as names };
    export namespace block_1 {
        const pruneAfterHeight_1: number;
        export { pruneAfterHeight_1 as pruneAfterHeight };
        const keepBlocks_1: number;
        export { keepBlocks_1 as keepBlocks };
        const maxTipAge_1: number;
        export { maxTipAge_1 as maxTipAge };
        const slowHeight_1: number;
        export { slowHeight_1 as slowHeight };
    }
    export { block_1 as block };
    const goosigStop_1: number;
    export { goosigStop_1 as goosigStop };
    const activationThreshold_1: number;
    export { activationThreshold_1 as activationThreshold };
    const minerWindow_1: number;
    export { minerWindow_1 as minerWindow };
    export namespace deployments_1 {
        export namespace hardening_1 {
            const name_2: string;
            export { name_2 as name };
            const bit_2: number;
            export { bit_2 as bit };
            const startTime_2: number;
            export { startTime_2 as startTime };
            const timeout_2: number;
            export { timeout_2 as timeout };
            const threshold_2: number;
            export { threshold_2 as threshold };
            const window_2: number;
            export { window_2 as window };
            const required_2: boolean;
            export { required_2 as required };
            const force_2: boolean;
            export { force_2 as force };
        }
        export { hardening_1 as hardening };
        export namespace testdummy_1 {
            const name_3: string;
            export { name_3 as name };
            const bit_3: number;
            export { bit_3 as bit };
            const startTime_3: number;
            export { startTime_3 as startTime };
            const timeout_3: number;
            export { timeout_3 as timeout };
            const threshold_3: number;
            export { threshold_3 as threshold };
            const window_3: number;
            export { window_3 as window };
            const required_3: boolean;
            export { required_3 as required };
            const force_3: boolean;
            export { force_3 as force };
        }
        export { testdummy_1 as testdummy };
    }
    export { deployments_1 as deployments };
    const deploys_1: {
        name: string;
        bit: number;
        startTime: number;
        timeout: number;
        threshold: number;
        window: number;
        required: boolean;
        force: boolean;
    }[];
    export { deploys_1 as deploys };
    export namespace keyPrefix_1 {
        const privkey_1: number;
        export { privkey_1 as privkey };
        const xpubkey_1: number;
        export { xpubkey_1 as xpubkey };
        const xprivkey_1: number;
        export { xprivkey_1 as xprivkey };
        const xpubkey58_1: string;
        export { xpubkey58_1 as xpubkey58 };
        const xprivkey58_1: string;
        export { xprivkey58_1 as xprivkey58 };
        const coinType_1: number;
        export { coinType_1 as coinType };
    }
    export { keyPrefix_1 as keyPrefix };
    const addressPrefix_1: string;
    export { addressPrefix_1 as addressPrefix };
    const requireStandard_1: boolean;
    export { requireStandard_1 as requireStandard };
    const rpcPort_1: number;
    export { rpcPort_1 as rpcPort };
    const walletPort_1: number;
    export { walletPort_1 as walletPort };
    const nsPort_1: number;
    export { nsPort_1 as nsPort };
    const rsPort_1: number;
    export { rsPort_1 as rsPort };
    const minRelay_1: number;
    export { minRelay_1 as minRelay };
    const feeRate_1: number;
    export { feeRate_1 as feeRate };
    const maxFeeRate_1: number;
    export { maxFeeRate_1 as maxFeeRate };
    const identityKey_1: Buffer;
    export { identityKey_1 as identityKey };
    const selfConnect_1: boolean;
    export { selfConnect_1 as selfConnect };
    const requestMempool_1: boolean;
    export { requestMempool_1 as requestMempool };
    const claimPrefix_1: string;
    export { claimPrefix_1 as claimPrefix };
    const deflationHeight_1: number;
    export { deflationHeight_1 as deflationHeight };
}
export namespace simnet {
    const type_2: string;
    export { type_2 as type };
    const seeds_2: any[];
    export { seeds_2 as seeds };
    const magic_2: number;
    export { magic_2 as magic };
    const port_2: number;
    export { port_2 as port };
    const brontidePort_2: number;
    export { brontidePort_2 as brontidePort };
    const checkpointMap_2: {};
    export { checkpointMap_2 as checkpointMap };
    const lastCheckpoint_2: number;
    export { lastCheckpoint_2 as lastCheckpoint };
    const halvingInterval_2: number;
    export { halvingInterval_2 as halvingInterval };
    const coinbaseMaturity_2: number;
    export { coinbaseMaturity_2 as coinbaseMaturity };
    const genesis_2: {
        version: number;
        hash: Buffer;
        prevBlock: Buffer;
        merkleRoot: Buffer;
        witnessRoot: Buffer;
        treeRoot: Buffer;
        reservedRoot: Buffer;
        time: number;
        /**
         * Whether to reset target if a block
         * has not been mined recently.
         * @const {Boolean}
         * @default
         */
        bits: number;
        nonce: number;
        extraNonce: Buffer;
        mask: Buffer;
        height: number;
        magic: number;
    };
    export { genesis_2 as genesis };
    const genesisBlock_2: Buffer;
    export { genesisBlock_2 as genesisBlock };
    export namespace pow {
        const limit_2: any;
        export { limit_2 as limit };
        const bits_2: number;
        export { bits_2 as bits };
        const chainwork_2: any;
        export { chainwork_2 as chainwork };
        const targetWindow_2: number;
        export { targetWindow_2 as targetWindow };
        const targetSpacing_2: number;
        export { targetSpacing_2 as targetSpacing };
        const blocksPerDay_2: number;
        export { blocksPerDay_2 as blocksPerDay };
        const targetTimespan_2: number;
        export { targetTimespan_2 as targetTimespan };
        const minActual_2: number;
        export { minActual_2 as minActual };
        const maxActual_2: number;
        export { maxActual_2 as maxActual };
        const targetReset_2: boolean;
        export { targetReset_2 as targetReset };
        const noRetargeting_2: boolean;
        export { noRetargeting_2 as noRetargeting };
    }
    const txStart_2: number;
    export { txStart_2 as txStart };
    export namespace names_2 {
        const auctionStart_2: number;
        export { auctionStart_2 as auctionStart };
        const rolloutInterval_2: number;
        export { rolloutInterval_2 as rolloutInterval };
        const lockupPeriod_2: number;
        export { lockupPeriod_2 as lockupPeriod };
        const renewalWindow_2: number;
        export { renewalWindow_2 as renewalWindow };
        const renewalPeriod_2: number;
        export { renewalPeriod_2 as renewalPeriod };
        const renewalMaturity_2: number;
        export { renewalMaturity_2 as renewalMaturity };
        const claimPeriod_2: number;
        export { claimPeriod_2 as claimPeriod };
        const claimFrequency_2: number;
        export { claimFrequency_2 as claimFrequency };
        const biddingPeriod_2: number;
        export { biddingPeriod_2 as biddingPeriod };
        const revealPeriod_2: number;
        export { revealPeriod_2 as revealPeriod };
        const treeInterval_2: number;
        export { treeInterval_2 as treeInterval };
        const transferLockup_2: number;
        export { transferLockup_2 as transferLockup };
        const revocationDelay_2: number;
        export { revocationDelay_2 as revocationDelay };
        const auctionMaturity_2: number;
        export { auctionMaturity_2 as auctionMaturity };
        const noRollout_2: boolean;
        export { noRollout_2 as noRollout };
        const noReserved_2: boolean;
        export { noReserved_2 as noReserved };
    }
    export { names_2 as names };
    export namespace block_2 {
        const pruneAfterHeight_2: number;
        export { pruneAfterHeight_2 as pruneAfterHeight };
        const keepBlocks_2: number;
        export { keepBlocks_2 as keepBlocks };
        const maxTipAge_2: number;
        export { maxTipAge_2 as maxTipAge };
        const slowHeight_2: number;
        export { slowHeight_2 as slowHeight };
    }
    export { block_2 as block };
    const goosigStop_2: number;
    export { goosigStop_2 as goosigStop };
    const activationThreshold_2: number;
    export { activationThreshold_2 as activationThreshold };
    const minerWindow_2: number;
    export { minerWindow_2 as minerWindow };
    export namespace deployments_2 {
        export namespace hardening_2 {
            const name_4: string;
            export { name_4 as name };
            const bit_4: number;
            export { bit_4 as bit };
            const startTime_4: number;
            export { startTime_4 as startTime };
            const timeout_4: number;
            export { timeout_4 as timeout };
            const threshold_4: number;
            export { threshold_4 as threshold };
            const window_4: number;
            export { window_4 as window };
            const required_4: boolean;
            export { required_4 as required };
            const force_4: boolean;
            export { force_4 as force };
        }
        export { hardening_2 as hardening };
        export namespace testdummy_2 {
            const name_5: string;
            export { name_5 as name };
            const bit_5: number;
            export { bit_5 as bit };
            const startTime_5: number;
            export { startTime_5 as startTime };
            const timeout_5: number;
            export { timeout_5 as timeout };
            const threshold_5: number;
            export { threshold_5 as threshold };
            const window_5: number;
            export { window_5 as window };
            const required_5: boolean;
            export { required_5 as required };
            const force_5: boolean;
            export { force_5 as force };
        }
        export { testdummy_2 as testdummy };
    }
    export { deployments_2 as deployments };
    const deploys_2: {
        name: string;
        bit: number;
        startTime: number;
        timeout: number;
        threshold: number;
        window: number;
        required: boolean;
        force: boolean;
    }[];
    export { deploys_2 as deploys };
    export namespace keyPrefix_2 {
        const privkey_2: number;
        export { privkey_2 as privkey };
        const xpubkey_2: number;
        export { xpubkey_2 as xpubkey };
        const xprivkey_2: number;
        export { xprivkey_2 as xprivkey };
        const xpubkey58_2: string;
        export { xpubkey58_2 as xpubkey58 };
        const xprivkey58_2: string;
        export { xprivkey58_2 as xprivkey58 };
        const coinType_2: number;
        export { coinType_2 as coinType };
    }
    export { keyPrefix_2 as keyPrefix };
    const addressPrefix_2: string;
    export { addressPrefix_2 as addressPrefix };
    const requireStandard_2: boolean;
    export { requireStandard_2 as requireStandard };
    const rpcPort_2: number;
    export { rpcPort_2 as rpcPort };
    const walletPort_2: number;
    export { walletPort_2 as walletPort };
    const nsPort_2: number;
    export { nsPort_2 as nsPort };
    const rsPort_2: number;
    export { rsPort_2 as rsPort };
    const minRelay_2: number;
    export { minRelay_2 as minRelay };
    const feeRate_2: number;
    export { feeRate_2 as feeRate };
    const maxFeeRate_2: number;
    export { maxFeeRate_2 as maxFeeRate };
    const identityKey_2: Buffer;
    export { identityKey_2 as identityKey };
    const selfConnect_2: boolean;
    export { selfConnect_2 as selfConnect };
    const requestMempool_2: boolean;
    export { requestMempool_2 as requestMempool };
    const claimPrefix_2: string;
    export { claimPrefix_2 as claimPrefix };
    const deflationHeight_2: number;
    export { deflationHeight_2 as deflationHeight };
}
