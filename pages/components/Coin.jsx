import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { gsap } from "gsap";

const CoinAnimationContext = createContext(); // Capitalize context name

const CoinAnimationProvider = ({ children }) => {
  const [coins, setCoins] = useState([]); // Track the coins
  const coinContainerRef = useRef(null);

  // Add new coins (you can change the length back to 100 if needed)
  const addCoins = () => {
    const newCoins = Array.from({ length: 10 }, (_, i) => i + 1); // Changed to 10 coins for now
    setCoins(newCoins);
    console.log("i am working ");
  };

  // Random integer utility function
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    if (coins.length > 0) {
      const tl = gsap.timeline(); // Create timeline inside useEffect

      // Initial reveal animation
      tl.to(".coin-main", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.05,
      })
        .to(".coin-main", {
          zIndex: 999,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05,
        })
        .fromTo(
          ".coin",
          { scale: 0, y: 50, opacity: 0 }, // Starting properties
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)", // Bouncy effect
            stagger: 0.05, // Stagger to reveal one by one
          }
        )
        // Fly animation
        .to(".coin", {
          y: -(Math.random() * 300 + 700), // Fly upwards randomly
          x: (Math.random() - 0.5) * 200, // Fly left or right
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.05,
          onComplete: () => {
            tl.to(".coin-main", {
              autoAlpha: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.05,
            }).to(".coin-main", {
              zIndex: -1,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.05,
            });
          },
        });
    }
  }, [coins]); // Trigger animation when coins array updates

  return (
    <CoinAnimationContext.Provider value={addCoins}>
      <div className="bg-transparent w-full flex justify-center h-full items-end absolute -z-[1] coin-main">
        <div
          ref={coinContainerRef}
          className="coin-container"
          style={{ position: "absolute", height: "300px", width: "19rem" }} // Fixed width
        >
          {coins.map((coin) => (
            <div
              key={coin}
              className="coin"
              style={{
                position: "absolute",
                top: randomIntFromInterval(0, 50) + "px", // Adjusted randomness
                left: randomIntFromInterval(0, 100) + "%", // Random horizontal position
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundImage: `url('/assets/coin.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "transparent",
                display: "inline-block",
                zIndex: coin,
              }}
            />
          ))}
        </div>
        {/* <button onClick={addCoins}>Add 100 Coins</button> */}
      </div>
      {children}
    </CoinAnimationContext.Provider>
  );
};

export default CoinAnimationProvider;

// Custom hook to access the context
export const useCoinAnimation = () => useContext(CoinAnimationContext);
