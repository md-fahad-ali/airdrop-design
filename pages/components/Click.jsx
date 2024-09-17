import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Click = (props) => {
  //   const [points, setPoints] = useState(0);
  const [clicks, setClicks] = useState([]);
  const pointsToAdd = 11; // Points to be added on each tap

  const handleTap = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate click position relative to the center of the element
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply the tilt animation by rotating the element based on the click position
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;

    // Remove the transform after a short delay
    setTimeout(() => {
      card.style.transform = "";
    }, 200);

    props?.setPoints(props?.points + pointsToAdd);

    // Track the tap animation coordinates
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      <div className="text-white font-bold text-2xl mb-4 flex justify-center items-center gap-3">
        <Image
          src="/assets/coin.png"
          alt="Points:"
          width="30"
          height="30"
          style={{ userSelect: "none" }}
        />{" "}
        <h1 className="text-4xl">{props?.points}</h1>
      </div>

      {/* Tap target area with tilt effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
          duration: 0.5,
        }}
        className="w-80 h-80 rounded-full flex items-center justify-center"
        onClick={handleTap}
        style={{
          cursor: "pointer",
          transition: "transform 0.2s ease-out",
          background:
            "linear-gradient(rgb(2, 28, 36) 23.1861%, rgb(4, 85, 115) 100%)",
        }} // Smooth transition for tilt effect
      >
        <div
          className="circle-inner w-[90%] h-[90%] rounded-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, rgb(11.000000294297934, 80.00000283122063, 94.0000019967556) 1.9999980926513672%, rgb(14.000000115484, 62.00000010430813, 97.00000181794167) 100%)",
          }}
        >
          <Image
            src="/assets/bird.svg"
            alt="Dr"
            width="170"
            height="170"
            style={{ userSelect: "none" }}
          />
        </div>
      </motion.div>

      {/* Floating point animation */}
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          +{pointsToAdd}
        </div>
      ))}

      {/* CSS Animation for the float effect */}
      <style>{`
        @keyframes float {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
        }
      `}</style>
    </div>
  );
};

export default Click;
