"use client";
import React, {useState} from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import {useSession} from 'next-auth/react';

const PaymentPage = ({ username }) => {
  // const {data: session } = useSession()
  const [paymentform, setPaymentform] = useState({  });
  const [currentuser, setcurrentuser] = useState({  })

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async (params) => {
    let u = await fetchuser(username)
    setcurrentuser(u)
  }
  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Get me a Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "+919876543210", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/20.gif?token-hash=AK5ABuUj1faTfJ81f6g-kTWcxuDkPwfGfoWBnAegBss%3D&token-time=1783123200"
          alt=""
        />

        <div className="absolute -bottom-20 right-[46%] border-2 border-white rounded-full">
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated Art for VTT's</div>
        <div className="text-slate-400">
          9719 Members . 82 Posts . $15,450 / Release
        </div>

        <div className="payment flex gap-3 w-[95%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-2 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Subham Donated <span className="font-bold">$30</span> with a
                  message "I support you Bro. Lot of ❤️"
                </span>
              </li>
              <li className="my-2 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Subham Donated <span className="font-bold">$30</span> with a
                  message "I support you Bro. Lot of ❤️"
                </span>
              </li>
              <li className="my-2 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Subham Donated <span className="font-bold">$30</span> with a
                  message "I support you Bro. Lot of ❤️"
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input
                onChange={handleChange}
                value={paymentform.name}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                name="name"
                placeholder="Enter Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                type="text"
                name="message"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input
                onChange={handleChange}
                value={paymentform.amount}
                type="text"
                name="amount"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              {/* <div className="text-center"> */}
              <button className=" text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Pay
              </button>
              {/* </div> */}
            </div>
            <div className="flex gap-5 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
