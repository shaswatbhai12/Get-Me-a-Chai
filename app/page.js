import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh] ">
      <div className="font-bold flex gap-2 text-5xl justify-center items-center">Get Me a Chai <span><img className="invertImg" src="tea.gif" width={88} alt="" /></span></div>
      <p>
        A Crowdfunding platform for creators. Get Funded by your Fans and Followers. Start Now!
      </p>
      <div>
        </div>

      <Link href="/login"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
      {/* <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Read More</button> */}
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>
    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to support you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt=""/>
          <p className="font-bold">Fans want to contribute</p>
          <p className="text-center">Your fans are willing to contribute financially</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt=""/>
          <p className="font-bold">Fans want to collaborate</p>
          <p className="text-center">Your Fans are ready to collaborate with you</p>
        </div>
      </div>
    </div>
</>
  );
}
