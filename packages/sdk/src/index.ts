// @remitchain/sdk — Stellar helpers for instant USDC payroll
// Re-export everything needed by consuming apps

export { createKeypair, fundTestnetAccount, accountExists } from './account';

export {
  sendPayment,
  getBalance,
  getTransactionHistory,
  establishUsdcTrustline,
} from './payment';

export {
  HORIZON_TESTNET_URL,
  FRIENDBOT_URL,
  USDC_ASSET_CODE,
  USDC_ISSUER_TESTNET,
} from './types';

export type {
  StellarKeypair,
  Balance,
  TransactionRecord,
  SendPaymentParams,
  PaymentResult,
} from './types';
