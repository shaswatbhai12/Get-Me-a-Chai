import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh] ">
      <div className="font-bold flex gap-2 text-5xl justify-center items-center">Get Me a Chai <span><img src="tea.gif" width={88} alt="" /></span></div>
      <p>
        A Crowdfunding platform for creators. Get Funded by your Fans and Followers. Start Now!
      </p>
      <div >
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>
    <div className="text-white container mx-auto">
      <h1 className="text-2xl font-bold text-center my-14">Your Fans can buy you a Chai</h1>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
          <p className="font-bold">Fund Yourself</p>
        </div>
        <div className="item space-y-3">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt=""/>
          <p className="font-bold">Fund Yourself</p>
        </div>
        <div className="item space-y-3">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt=""/>
          <p className="font-bold">Fans want to help</p>
          <p>Your Fans are available to help you</p>
        </div>
      </div>
    </div>
</>
  );
}
