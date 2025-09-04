import React, { useRef } from "react";
import Header from "../main/Header";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Contant() {
  const slidPrentDiv = useRef(null);
  const firstSpanRef = useRef(null);
  const secondSpanRef = useRef(null);

  useGSAP(() => {
    const parent = slidPrentDiv.current;

    const handleEnter = () => {
      gsap.to(firstSpanRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.to(secondSpanRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power4.out",
      });
    };

    const handleLeave = () => {
      gsap.to(firstSpanRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.to(secondSpanRef.current, {
        y: "100%",
        duration: 0.8,
        ease: "power4.out",
      });
    };

    parent.addEventListener("mouseenter", handleEnter);
    parent.addEventListener("mouseleave", handleLeave);

    // 🧹 Cleanup
    return () => {
      parent.removeEventListener("mouseenter", handleEnter);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="h-full w-full bg-emerald-950 absolute top-0 left-0 flex flex-col justify-between overflow-hidden">
      <Header />

      <div className="px-8">
        <div ref={slidPrentDiv} className="flex gap-8 items-center">
          <div className="relative overflow-hidden h-[250px] w-fit">
            <Link
              to="/"
              className="relative inline-block text-[20rem] font-extrabold leading-[0.90]"
              style={{clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"}}
            >
              {/* Layout span (invisible but keeps size) */}
              <span className="invisible block">Directors</span>

              {/* First span - Black text (slides up) */}
              <span
                ref={firstSpanRef}
                className="absolute top-0 left-0 block text-white"
              >
                Directors
              </span>

              {/* Second span - Red text (slides in from below) */}
              <span
                ref={secondSpanRef}
                className="absolute top-0 left-0 block text-[#F93434] translate-y-full"
              >
                Directors
              </span>
            </Link>
          </div>

          <span className="w-[220px] h-[220px] bg-[#F93434] text-2xl flex justify-center items-center rounded-full">
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1878 0.600494L11.1878 9.60049L19.0356 5.10049L11.1878 0.600494Z"
                fill="white"
              />
              <path
                d="M0.0356444 3.00049L0.0356444 7.20049L11.1878 6.00049L11.1878 4.20049L0.0356444 3.00049Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contant;
