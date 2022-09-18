export const PROTOCOL_VERSION: 3;
export const MIN_VERSION: 1;
export namespace services {
    const NETWORK: number;
    const BLOOM: number;
}
/**
 * *
 */
export type services = number;
export const LOCAL_SERVICES: number;
export const REQUIRED_SERVICES: number;
export const USER_AGENT: string;
export const MAX_MESSAGE: number;
export const BAN_TIME: number;
export const BAN_SCORE: 100;
export function nonce(): Buffer;
export const ZERO_KEY: Buffer;
export const ZERO_SIG: Buffer;
export const ZERO_NONCE: Buffer;
export const MAX_INV: 50000;
export const MAX_REQUEST: 5000;
export const MAX_BLOCK_REQUEST: number;
export const MAX_TX_REQUEST: 10000;
export const MAX_CLAIM_REQUEST: 1000;
