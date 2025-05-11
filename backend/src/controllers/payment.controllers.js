import mongoose from "mongoose"

import Payment from "../models/payment.models.js"

{
    /*An order is an entity which has a amount and currency associated 
    with it. It is something for which you want to collect payment for. 
    Use this API to create orders with Cashfree from your backend to get a
     payment_sessions_id. You can use the payment_sessions_id 
     to create a transaction for the order. */
}



const createOrder=async ()=>{
    try {

         const {
      order_id,
      order_amount,
      customer_name,
      customer_email,
      customer_phone,
    } = req.body;


    const payment=await Payment.create({
          order_id,
      order_amount,
      order_currency: "INR",
      customer_name,
      customer_email,
      customer_phone,
    })


    res.status(200).json({
        success:true,
        data:payment
    })


        
    } catch (error) {
        

 
    }

    
}




export {
    createOrder
}



