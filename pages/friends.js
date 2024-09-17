import React from "react";
import { useState } from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import CoinAnimationProvider, { useCoinAnimation } from "./components/Coin";
import { useEffect } from "react";
import { LuCopy } from "react-icons/lu";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function MainPage() {
  const [data, setData] = useState("friends");
  const [points, setPoints] = useState(0);
  const [open, setOpen] = useState(false);

  function clickButton(btnName) {
    console.log(btnName);
    setData(btnName);
  }

  console.log(data);

  function mineDrop(name) {
    setOpen(true);
  }

  function addCoin() {
    console.log("ok");
    useCoinAnimation();
  }

  return (
    <CoinAnimationProvider>
      <MainContent data={data} clickButton={clickButton} />
    </CoinAnimationProvider>
  );
}

function MainContent(props) {
  const { data, mineData, open, setOpen, clickButton, mineDrop } = props;

  const addCoin = useCoinAnimation();
  return (
    <div className="flex bg-black justify-center items-center">
      <div
        className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl"
        style={{
          background:
            " linear-gradient(180deg, rgb(3.050260436721146, 21.692044213414192, 56.31249949336052) 0%, rgb(5.578124905005097, 71.12109526991844, 89.24999848008156) 100%)",
          backgroundColor: " rgba(255, 255, 255, 1.0)",
        }}
      >
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl">Invite a friend</h1>
          <p>You and your friends will recieve bonus</p>
          <br />

          <div className="flex flex-col justify-between h-[60%]">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center flex-row bg-[#294d64] p-[5px] w-[33rem] rounded-[30px] gap-[20px]"
              >
                <Image
                  src="/assets/gift.png"
                  alt="Gift"
                  width="100"
                  height="100"
                  style={{ userSelect: "none" }}
                />
                <div>
                  <h1>Invite a friend</h1>
                  <br />
                  <div className="text-white font-bold text-2xl mb-4 flex justify-center items-center gap-3">
                    <Image
                      src="/assets/coin.png"
                      alt="Points:"
                      width="30"
                      height="30"
                      style={{ userSelect: "none" }}
                    />{" "}
                    <div className="flex gap-2">
                      <h1 className="text-xl text-[gold]">5000</h1>
                      <h1 className="text-xl">For you and for you friend</h1>
                    </div>
                  </div>
                </div>
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center flex-row bg-[#294d64] p-[5px] w-[33rem] rounded-[30px] gap-[20px]"
              >
                <Image
                  src="/assets/gift.png"
                  alt="Gift"
                  width="100"
                  height="100"
                  style={{ userSelect: "none" }}
                />
                <div>
                  <h1>Invite a friend with telegram premium</h1>
                  <br />
                  <div className="text-white font-bold text-2xl mb-4 flex justify-center items-center gap-3">
                    <Image
                      src="/assets/coin.png"
                      alt="Points:"
                      width="30"
                      height="30"
                      style={{ userSelect: "none" }}
                    />{" "}
                    <div className="flex gap-2">
                      <h1 className="text-xl text-[gold]">25000</h1>
                      <h1 className="text-xl">For you and for you friend</h1>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-3 pb-3">
              <div className="bg-indigo-800 p-5 w-full rounded-3xl">
                <h1 className=" text-white text-center text-3xl">
                  Invite a friend
                </h1>
              </div>
              <div className="bg-indigo-800 p-5 rounded-3xl w-[100px]">
                <LuCopy className="text-5xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}

        <Footer clickButton={clickButton} data={data} />
      </div>
    </div>
  );
}
