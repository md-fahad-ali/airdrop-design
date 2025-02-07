import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer(props) {
  const { clickButton, data, setData } = props;
  return (
    <div>
      <div
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-1 max-w-xl bg-[#00212a] flex justify-around items-center z-50 rounded-3xl text-xs"
        style={{ width: "clamp(20rem, 100% - 18px, 35rem)" }}
      >
        <Link href="/" className="w-[17%]">
          <div
            className={`text-center text-[#85827d] m-1 p-2 rounded-2xl cursor-pointer ${
              data == "exchange" ? "bg-[#092d3f]" : "bg-transparent"
            }`}
            onClick={() => clickButton("exchange")}
            data-type="exchange"
          >
            <Image
              src="/assets/binance-logo.png"
              alt="Exchange"
              className="w-8 h-8 mx-auto"
              width={50}
              height={50}
            />
            <p className="mt-1 -ml-[8px]">Exchange</p>
          </div>
        </Link>
        <Link href="/mine" className="w-[17%]">
          <div
            className={`text-center text-[#85827d] m-1 p-2 rounded-2xl cursor-pointer ${
              data == "mine" ? "bg-[#092d3f]" : "bg-transparent"
            }`}
            onClick={() => clickButton("mine")}
            data-type="mine"
          >
            <Image
              src="/assets/mine.png"
              alt="Exchange"
              className="w-8 h-8 mx-auto"
              width={50}
              height={50}
            />
            <p className="mt-1">Mine</p>
          </div>
        </Link>

        <Link href="/friends" className="w-[17%]">
          <div
            className={`text-center text-[#85827d] m-1 p-2 rounded-2xl cursor-pointer ${
              data == "friends" ? "bg-[#092d3f]" : "bg-transparent"
            }`}
            onClick={() => clickButton("friends")}
            data-type="friends"
          >
            <Image
              src="/assets/friends.png"
              alt="Friends"
              className="w-8 h-8 mx-auto"
              width={50}
              height={50}
            />
            <p className="mt-1">Friends</p>
          </div>
        </Link>

        <Link href="/earn" className="w-[17%]">
          <div
            className={`text-center text-[#85827d] m-1 p-2 rounded-2xl cursor-pointer ${
              data == "earn" ? "bg-[#092d3f]" : "bg-transparent"
            }`}
            onClick={() => clickButton("earn")}
            data-type="earn"
          >
            <Image
              src="/assets/earn.png"
              alt="earn"
              className="w-8 h-8 mx-auto"
              width={50}
              height={50}
            />
            <p className="mt-1">Earn</p>
          </div>
        </Link>

        <Link href="/airdrop" className="w-[17%]">
          <div
            className={`text-center text-[#85827d] m-1 p-2 rounded-2xl cursor-pointer ${
              data == "airdrop" ? "bg-[#092d3f]" : "bg-transparent"
            }`}
            onClick={() => clickButton("airdrop")}
            data-type="airdrop"
          >
            <Image
              src="/assets/airdrop.png"
              alt="airdrop"
              className="w-8 h-8 mx-auto"
              width={50}
              height={50}
            />
            <p className="mt-1">Airdrop</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
