 export const ADD_PAYMENT ="ADD_PAYMENT";
 export const UPDATE_PAYMENT ="UPDATE_PAYMENT";
 export const GETALL_PAYMENT ="GETALL_PAYMEN";
 export const DELETE_PAYMENT ="DELETE_PAYMENT";

 const baseUrl = "http://localhost:3000";


 const addPayment = (data)=> async (dispatch)=>{
    const reqopt = {
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data),
        method:"POST"
    }
    const res = await fetch(`${baseUrl}/payment/createpayment`,
    reqopt);

    const data = await res.json();

    dispatch({type:"ADD_PAYMENT",payload:data});


 }

 const gettallPayments = ()=>async (dispatch)=>{
    const res = await fetch(`${baseUrl}/payment/getallpayments`);
    const data =  await res. json()
    dispatch({type:"GETALL_PAYMEN",payload:data});
 }