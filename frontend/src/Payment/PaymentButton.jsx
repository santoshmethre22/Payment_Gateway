// src/PaymentButton.jsx
import React from "react";
import axios from "axios";

const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      const orderId = "order_" + Date.now(); // unique order_id

      // Send request to backend to create order
      const res = await axios.post("http://localhost:5000/api/payment/create-order", {
        order_id: orderId,
        order_amount: 499, // set your amount
        customer_name: "John Doe",
        customer_email: "john@example.com",
        customer_phone: "9876543210",
      });

      const { order_token, order_id } = res.data;

      if (!window.Cashfree) {
        alert("Cashfree SDK not loaded.");
        return;
      }

      const cashfree = new window.Cashfree({
        mode: "sandbox", // change to 'production' later
      });

      cashfree.pay({
        paymentSessionId: order_token,
        returnUrl: `http://localhost:3000/payment-response?order_id=${order_id}`,
      });
    } catch (err) {
      console.error(err);
      alert("Payment failed to start.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Pay ₹499 with Cashfree</h2>
      <button onClick={handlePayment} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentButton;
