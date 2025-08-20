// reducer.js

import {
  GETALL_LEDGER_WALLET,
  GETALL_PAYOUTLOG_DATA,
  GETALL_BULKPAY_DATA,
  GETALL_WALLET_COMPANY_DATA,
  PAYOUT_REPORT
} from "./action";

const initialLedgerWalletState = {
  ledgerwallet: [],
};

export const ledgerwalletReducer = (
  state = initialLedgerWalletState,
  action
) => {
  if (action.type === GETALL_LEDGER_WALLET) {
    return {
      ...state,
      ledgerwallet: action.payload,
    };
  } else {
    return state;
  }
};

const initialPayoutLogState = {
  payoutlog: [],
};

export const payoutlogReducer = (state = initialPayoutLogState, action) => {
  if (action.type === GETALL_PAYOUTLOG_DATA) {
    return {
      ...state,
      payoutlog: action.payload,
    };
  } else {
    return state;
  }
};

const initialbulkpaystate = {
  bulkpayout: [],
};

export const bulkpayoutReducer = (state = initialbulkpaystate, action) => {
  if (action.type === GETALL_BULKPAY_DATA) {
    return {
      ...state,
      bulkpayout: action.payload,
    };
  } else {
    return state;
  }
};
const initialwalletcompanystate = {
  walletcompany: [],
};

export const walletcompanyReducer = (state = initialwalletcompanystate, action) => {
  if (action.type === GETALL_WALLET_COMPANY_DATA) {
    return {
      ...state,
      walletcompany: action.payload,
    };
  } else {
    return state;
  }
};
const initialpayoutreport = {
  payoutreport: [],
};

export const payoutreportReducer = (state = initialpayoutreport, action) => {
  if (action.type === PAYOUT_REPORT) {
    return {
      ...state,
      payoutreport: action.payload,
    };
  } else {
    return state;
  }
};
