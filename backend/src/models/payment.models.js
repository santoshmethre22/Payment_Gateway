import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
      unique: true,
    },
    order_amount: {
      type: Number,
      required: true,
    },
    order_currency: {
      type: String,
      default: "INR",
    },
    status: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
      default: "PENDING",
    },

    // Customer Details
    customer_name: String,
    customer_email: String,
    customer_phone: String,

    // Payment Details
    cf_payment_id: String,
    payment_status: String,
    payment_method: String,
    payment_time: Date,
    payment_reference: String,
    payment_group: String,

    // Refund
    is_refunded: {
      type: Boolean,
      default: false,
    },
    refund_id: String,
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// ✅ Correct export (ES Module format)
const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
