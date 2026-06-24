"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@db/connectDb"
import User from "@/models/User"

export const initiate = async(amount, to_username, payment_form) => {
    await connectDb()
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

    // instance.order.create({
    //     amount: 50000,
    //     currecncy: "INR",
    //     receipt: "receipt#1",
    //     notes: {
    //         key1: "value3",
    //         key2: "value2"
    //     }
    // })

    let options = {
        amount: Number.parseInt(amount), 
        currency: "INR"
    }

    let x = await instance.order.create(options)

    await Payment.create({oid: x.id, amount: amount, to_username: to_username, name: paymentform.name, message: paymentform.message})

    return x
}