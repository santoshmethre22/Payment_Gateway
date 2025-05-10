import express from  "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config({
    'path':'./.env'
})

const app=express();
app.use(cors());              // Allow frontend requests
app.use(express.json());




const options = {
    method: 'POST',
    headers: {
      'x-api-version': '<x-api-version>',
      'x-client-id': '<api-key>',
      'x-client-secret': '<api-key>',
      'Content-Type': 'application/json'
    },
    body: '{"order_currency":"INR","order_amount":10.34,"customer_details":{"customer_id":"7112AAA812234","customer_phone":"9898989898"}}'
  };
  
  fetch('https://sandbox.cashfree.com/pg/orders', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));