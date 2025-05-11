import mongoose from "mongoose"

import Payment from "../models/payment.models.js"

{
    /*An order is an entity which has a amount and currency associated 
    with it. It is something for which you want to collect payment for. 
    Use this API to create orders with Cashfree from your backend to get a
     payment_sessions_id. You can use the payment_sessions_id 
     to create a transaction for the order. */
}



// const createOrder=async ()=>{
//     try {

//          const {
//       order_id,
//       order_amount,
//       customer_name,
//       customer_email,
//       customer_phone,
//     } = req.body;


//     const payment=await Payment.create({
//           order_id,
//       order_amount,
//       order_currency: "INR",
//       customer_name,
//       customer_email,
//       customer_phone,
//     })


//     res.status(200).json({
//         success:true,
//         data:payment
//     })


        
//     } catch (error) {
        

 
//     }

    
// }



// controllers/payment.controllers.js
import axios from "axios";
import Payment from "../models/payment.models.js";

const createOrder = async (req, res) => {
  try {
    const {
      order_id,
      order_amount,
      customer_name,
      customer_email,
      customer_phone,
    } = req.body;

    // Save to MongoDB (your own tracking)
    const payment = await Payment.create({
      order_id,
      order_amount,
      order_currency: "INR",
      customer_name,
      customer_email,
      customer_phone,
    });

    // Call Cashfree API
    const response = await axios.post(
      `${process.env.CASHFREE_BASE_URL}/pg/orders`,
      {
        order_id,
        order_amount,
        order_currency: "INR",
        customer_details: {
          customer_name,
          customer_email,
          customer_phone,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
        },
      }
    );

    // Send back both your MongoDB data and Cashfree response
    res.status(200).json({
      success: true,
      payment,
      cashfreeOrder: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order creation failed",
      error: error.message,
    });
  }
};

export { createOrder };



export {
    createOrder
}



