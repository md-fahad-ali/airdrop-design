import React from "react";
import { useState } from "react";
import Image from "next/image";
import Click from "./Click";
import Link from "next/link";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function MainPage() {
  const [data, setData] = useState("exchange");
  const [points, setPoints] = useState(0);

  function clickButton(btnName) {
    console.log(btnName);
    setData(btnName);
  }

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
        <div className="h-screen">
          <div className="flex justify-between pt-5">
            <div
              className="bg-[#022f3d] p-3 pl-10"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            >
              <h1>Dr.Simon</h1>
            </div>

            <div
              className="bg-[#022f3d] p-3 pr-10 flex justify-center items-center gap-2"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            >
              <Image
                src="/assets/polygon.svg"
                alt="Dr"
                width="30"
                height="30"
              />
              <h1>33.3k</h1>
            </div>
          </div>

          <div className="flex flex-col justify-between h-[75%]">
            <motion.div
              initial={{ x: "-10px" }}
              animate={{ x: "0px" }}
              className="flex gap-[19px] pt-5 px-2 justify-center items-center"
            >
              <div className="px-1 py-2 w-full  ">
                <div
                  className="rounded-[14px] z-[99] p-3 top-1 h-auto flex flex-col justify-center items-center relative w-[auto] bg-[#07506a]"
                  style={{ boxShadow: "0px -2px 2px #ffe200" }}
                >
                  <Image src="/assets/dr.svg" alt="Dr" width="50" height="50" />
                  <p className="text-[10px] text-center text-white mt-1">
                    Daily Rewards
                  </p>
                  <p className=" font-[100]">10:10:10</p>
                </div>
              </div>

              <div className="px-1 py-2 w-full ">
                <div
                  className="rounded-[14px] z-[99] p-3 top-1 h-auto flex flex-col justify-center items-center relative w-[auto] bg-[#07506a]"
                  style={{ boxShadow: "0px -2px 2px #ffe200" }}
                >
                  <Image src="/assets/dr.svg" alt="Dr" width="50" height="50" />
                  <p className="text-[10px] text-center text-white mt-1">
                    Daily Rewards
                  </p>
                  <p className=" font-[100]">10:10:10</p>
                </div>
              </div>

              <div className="px-1 py-2 w-full">
                <div
                  className="rounded-[14px] z-[99] p-3 top-1 h-auto flex flex-col justify-center items-center relative w-[auto] bg-[#07506a]"
                  style={{ boxShadow: "0px -2px 2px #ffe200" }}
                >
                  <Image src="/assets/dr.svg" alt="Dr" width="50" height="50" />
                  <p className="text-[10px] text-center text-white mt-1">
                    Daily Rewards
                  </p>
                  <p className=" font-[100]">10:10:10</p>
                </div>
              </div>
            </motion.div>

            <Click setPoints={setPoints} points={points} />

            <div className="pl-3 pr-3">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <Image
                    src="/assets/bolt.svg"
                    alt="Dr"
                    width="30"
                    height="30"
                    style={{ userSelect: "none" }}
                  />
                  <p>6500/6500</p>
                </div>

                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/assets/rocket.svg"
                    alt="Dr"
                    width="50"
                    height="50"
                    style={{ userSelect: "none" }}
                  />
                  <p>6500/6500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer clickButton={clickButton} data={data} setData={setData} />
      </div>
    </div>
  );
}
