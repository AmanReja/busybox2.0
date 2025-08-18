export const GETALL_LEDGER_WALLET = "GETALL_LEDGER_WALLET";
export const GETALL_PAYOUTLOG_DATA = "GETALL_PAYOUTLOG_DATA";
export const GETALL_BULKPAY_DATA = "GETALL_BULKPAY_DATA";
export const GETALL_WALLET_COMPANY_DATA = "GETALL_WALLET_COMPANY_DATA";
export const GETONE_USER = "GETONE_USER";

const baseUrl = "http://192.168.1.35:3000";

export const getall_ledgerwallet_data =
  (searchtr, trstatus) => async (dispatch) => {
    const token = localStorage.getItem("token") || {};
    const res = await fetch(
      `${baseUrl}/v1/user/wallet-ledger?search=${encodeURIComponent(
        searchtr
      )}&status=${encodeURIComponent(trstatus)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return;
    }
    const data = await res.json();
    dispatch({ type: "GETALL_LEDGER_WALLET", payload: data });
  };

export const getall_payoutlog_data = () => async (dispatch) => {
  const token = localStorage.getItem("token") || {};
  const res = await fetch(
    `${baseUrl}/v1/user/payouts-logs`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/";
    return;
  }

  const data = await res.json();
  dispatch({ type: "GETALL_PAYOUTLOG_DATA", payload: data });
};
export const getall_bulkpay_data = () => async (dispatch) => {
  const token = localStorage.getItem("token") || {};
  const res = await fetch(
    `${baseUrl}/v1/user/bulk-pay`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/";
    return;
  }

  const data = await res.json();
  dispatch({ type: "GETALL_BULKPAY_DATA", payload: data });
};

export const getall_wallet_company_data = () => async (dispatch) => {
  const token = localStorage.getItem("token") || {};
  const res = await fetch(
    `${baseUrl}/v1/user/wallet-company`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/";
    return;
  }

  const data = await res.json();
  dispatch({ type: "GETALL_WALLET_COMPANY_DATA", payload: data });
  
};


export const getone_user = () => async (dispatch) => {
  const token = localStorage.getItem("token") || {};
  const res = await fetch(
    `${baseUrl}/v1/user/get-details`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/";
    return;
  }

  const data = await res.json();
  dispatch({ type: "GETONE_USER", payload: data });
};
