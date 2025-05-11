import axios from "axios"
import {Router} from "express"
import {createOrder} from "../controllers/payment.controllers.js"
const router=Router();
router.post( `${process.env.CASHFREE_BASE_URL}/orders`,createOrder);
//const createOrder=