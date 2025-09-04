import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [content, setContent] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.9,
      opacity: 0,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

      gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.75,
      x: "-50%",
      bottom: "-85%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [content]);

  return (
    <>
      <div className="svg flex justify-center items-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {content && (
        <>
          <div className="main w-full">
            <div className="landing w-full h-screen bg-black overflow-hidden">
              <div className="nav w-full z-[10] absolute top-0 left-0 flex items-center px-10 py-5">
                <h1 className="text-2xl text-white">rocstar</h1>
              </div>
              <div className="imgesContainer w-full h-screen relative">
                <img
                  className="sky scale-[1.5] w-full h-full absolute top-0 left-0"
                  src="./sky.png"
                  alt=""
                />
                <img
                  className="bg scale-[1.8] w-full h-full absolute top-0 left-0 object-cover"
                  src="./bg.png"
                  alt=""
                />
                <div className="text w-full h-full absolute top-0 left-1/2">
                  <h1 className="text-[6rem] text-white -ml-20 leading-none">
                    grand
                  </h1>
                  <h1 className="text-[6rem] text-white leading-none">theft</h1>
                  <h1 className="text-[6rem] text-white -ml-20 leading-none">
                    auto
                  </h1>
                </div>
                <img
                  className="absolute character bottom-[-90%] left-1/2 scale-[0.90] rotate-[30deg] -translate-x-[50%] object-cover"
                  src="./girlbg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
