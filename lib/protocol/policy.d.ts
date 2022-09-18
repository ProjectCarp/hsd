export const MAX_TX_VERSION: 0;
export const MAX_TX_SIZE: number;
export const MAX_TX_WEIGHT: number;
export const MAX_TX_SIGOPS: number;
export const BYTES_PER_SIGOP: 20;
export const MIN_RELAY: 1000;
export const FREE_THRESHOLD: number;
export const MAX_P2WSH_STACK: 100;
export const MAX_P2WSH_PUSH: 80;
export const MAX_P2WSH_SIZE: 3600;
export const MEMPOOL_MAX_ANCESTORS: 50;
export const MEMPOOL_MAX_SIZE: number;
export const MEMPOOL_EXPIRY_TIME: number;
export const MEMPOOL_MAX_ORPHANS: 100;
export const MIN_BLOCK_WEIGHT: 5000;
export const MAX_BLOCK_WEIGHT: number;
export const BLOCK_PRIORITY_WEIGHT: 0;
export { FREE_THRESHOLD as BLOCK_PRIORITY_THRESHOLD };
export function getMinFee(size: number | null, rate: Rate | null): Amount;
export function getRoundFee(size: number | null, rate: Rate | null): Amount;
export function getRate(size: number, fee: Amount): Rate;
