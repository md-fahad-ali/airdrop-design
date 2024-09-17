import { useState } from "react";
import CoinAnimationProvider, { useCoinAnimation } from "./components/Coin";
import { LuCopy } from "react-icons/lu";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function MainPage() {
  const [data, setData] = useState("airdrop");

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
          {/* Invite Cards */}
          <div className="flex flex-col gap-4 mt-10">
            <InviteCard text="Invite a friend with Telegram Premium" />
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
  //   function ConncetWallet() {
  //     console.log("hi");
  //   }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      //   onClick={ConncetWallet}
      className="flex items-center bg-[#294d64] w-full p-4 rounded-3xl gap-4"
    >
      <Image
        src="/assets/gift.png"
        alt="Gift"
        width="50"
        height="50"
        className="select-none"
      />
      <TonConnectButton />
    </motion.div>
  );
}
