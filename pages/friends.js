import { useState } from "react";
import CoinAnimationProvider, { useCoinAnimation } from "./components/Coin";
import { LuCopy } from "react-icons/lu";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function MainPage() {
  const [data, setData] = useState("friends");

  function clickButton(btnName) {
    setData(btnName);
  }

  return (
    <CoinAnimationProvider>
      <MainContent data={data} clickButton={clickButton} />
    </CoinAnimationProvider>
  );
}

function MainContent({ data, clickButton }) {
  function copyClip() {
    toast.success("Successfully toasted!");
  }
  return (
    <div className="flex flex-col h-dvh bg-black justify-between items-center overflow-hidden">
      <div
        className="w-full text-white font-bold flex justify-evenly h-dvh flex-col max-w-xl p-5"
        style={{
          background:
            "linear-gradient(180deg, rgb(3, 21, 56) 0%, rgb(5, 71, 89) 100%)",
        }}
      >
        <div>
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl mb-4">Invite a friend</h1>
            <p>You and your friends will receive a bonus</p>
          </div>

          {/* Invite Cards */}
          <div className="flex flex-col gap-4 mt-10">
            <InviteCard text="Invite a friend with Telegram" />
            <InviteCard text="Invite a friend with Telegram Premium" />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-3 ">
          <button className="bg-indigo-800 p-4 w-full rounded-3xl text-white text-center text-2xl">
            Invite a friend
          </button>
          <div
            className="bg-indigo-800 p-4 rounded-3xl flex justify-center items-center cursor-pointer"
            onClick={copyClip}
          >
            <LuCopy className="text-4xl text-white" />
          </div>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />

      {/* Footer */}
      <Footer clickButton={clickButton} data={data} />
    </div>
  );
}

function InviteCard({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center bg-[#294d64] w-full p-4 rounded-3xl gap-4"
    >
      <Image
        src="/assets/gift.png"
        alt="Gift"
        width="50"
        height="50"
        className="select-none"
      />
      <div className="text-white">
        <h1>{text}</h1>
        <div className="flex items-center gap-2 mt-2">
          <Image
            src="/assets/coin.png"
            alt="Points:"
            width="20"
            height="20"
            className="select-none"
          />
          <h1 className="text-[gold] text-xl">25000</h1>
          <p className="text-sm">For you and your friend</p>
        </div>
      </div>
    </motion.div>
  );
}
