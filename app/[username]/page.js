import React from "react";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <>
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

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5">
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
              <li className="my-2">Subham Donated $30 with a message "" </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <div className="text-center">

              <button className=" text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Pay
              </button>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
