import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

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


app.listen()