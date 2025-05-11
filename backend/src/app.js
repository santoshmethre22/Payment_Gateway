import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));



// Allow frontend requests
app.use(express.json());

// add routers here ------->


import paymentRouter from "./router/payment.router.js"

app.use("/api/v1/payments/",paymentRouter);





export { app };