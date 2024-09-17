import React from "react";
import { useState } from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import CoinAnimationProvider, { useCoinAnimation } from "./components/Coin";
import { useEffect } from "react";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function MainPage() {
  const [data, setData] = useState("mine");
  const [points, setPoints] = useState(0);
  const [open, setOpen] = useState(false);

  function clickButton(btnName) {
    console.log(btnName);
    setData(btnName);
  }

  console.log(data);

  const mineData = [
    {
      title: "Rocket Coin",
      image: "/assets/rocket.svg",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Exclude Coin",
      image: "/assets/Exclude.png",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Rocket Coin",
      image: "/assets/rocket.svg",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Exclude Coin",
      image: "/assets/Exclude.png",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Rocket Coin",
      image: "/assets/rocket.svg",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Exclude Coin",
      image: "/assets/Exclude.png",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Rocket Coin",
      image: "/assets/rocket.svg",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Exclude Coin",
      image: "/assets/Exclude.png",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Rocket Coin",
      image: "/assets/rocket.svg",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
    {
      title: "Exclude Coin",
      image: "/assets/Exclude.png",
      description: "Most traded cryptocurrency pairs market capitalization",
    },
  ];

  function mineDrop(name) {
    setOpen(true);
  }

  return (
    <CoinAnimationProvider>
      <MainContent
        data={data}
        mineData={mineData}
        open={open}
        setOpen={setOpen}
        clickButton={clickButton}
        mineDrop={mineDrop}
      />
    </CoinAnimationProvider>
  );
}

function MainContent(props) {
  const { data, mineData, open, setOpen, clickButton, mineDrop } = props;

  const coinAnimation = useCoinAnimation();

  function addCoin() {
    coinAnimation();
  }

  const staggerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2, // Delay between child animations
      },
    },
    hidden: { opacity: 0, y: 20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

          <div className="h-[79%] overflow-y-scroll pb-[30px]">
            <div className="text-white font-bold text-2xl mb-4 mt-3 flex justify-center items-center gap-3 ">
              <Image
                src="/assets/coin.png"
                alt="Points:"
                width="50"
                height="50"
                style={{ userSelect: "none" }}
              />{" "}
              <h1 className="text-5xl">150,350</h1>
            </div>

            <motion.div
              className="flex flex-row flex-wrap items-center justify-center content-center gap-[15px]"
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
            >
              {mineData.map((e, i) => (
                <motion.div
                  variants={itemVariants}
                  className="bg-[#071d2e] p-5 box flex flex-col w-[45%] rounded-[10px] cursor-pointer"
                  key={i}
                  onClick={() => mineDrop()}
                >
                  <h3>{e.title}</h3>
                  <div className="w-[90%] h-[100px]">
                    <Image
                      src={e.image}
                      alt={e.title}
                      width="100"
                      height="100"
                      className="w-full h-full"
                      style={{ userSelect: "none" }}
                    />
                  </div>

                  <div className="text-white font-bold text-2xl mb-4 flex justify-center items-center gap-3 relative top-5">
                    <Image
                      src="/assets/coin.png"
                      alt="Points:"
                      width="30"
                      height="30"
                      style={{ userSelect: "none" }}
                    />{" "}
                    <h1 className="text-sm">100k</h1>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Footer */}
        <Footer clickButton={clickButton} data={data} />

        {/* Modal */}

        {open && (
          <div
            className="h-full absolute  w-full max-w-xl flex flex-col justify-end overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(250, 249, 243, 0.00) 0%, #05587B 30%)",
            }}
          >
            <div
              className=" z-[99] bottom-[1px] h-[55%] bg-[#02223D] flex flex-col justify-start"
              style={{ borderRadius: "50px 50px 0px 0px" }}
            >
              <div className="w-full h-[100px] flex items-center justify-end">
                <div
                  className="p-[10px] mr-[21px] rounded-[50%] bg-[#011a35] cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <ImCross className="text-white " />
                </div>
              </div>
              <div className="h-[350px] flex flex-col justify-center items-center">
                <h1 className="text-4xl">Rocket Coin</h1>
                <p className=" font-thin text-xl p-2 text-center">
                  Most traded cryptocurrency pairs market capitalization
                </p>
              </div>

              <div className="flex w-full justify-center items-center flex-col pb-[30px]">
                <div className="text-white font-bold text-2xl mb-4 flex justify-center items-center gap-3">
                  <Image
                    src="/assets/coin.png"
                    alt="Points:"
                    width="30"
                    height="30"
                    style={{ userSelect: "none" }}
                  />{" "}
                  <h1 className="text-3xl">100k</h1>
                </div>
                <br />
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-2xl font-bold w-[70%] px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={addCoin}
                >
                  Go Ahead
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
