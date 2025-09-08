import React, { useRef } from "react";
import Header from "../main/Header";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Contant() {
  return (
    <section className="h-full w-full absolute top-0 left-0 flex z-[2] flex-col justify-between overflow-hidden">
      <Header />
      
      {/* content div */}
      <div className="px-8">
        <div className="flex gap-8 items-center">
          <Link
            to="/"
          >
            <span className="text-white text-[21rem] relative top-[25px] font-extrabold uppercase leading-[0.8] headingFont">Directors</span>
          </Link>

          <span className="w-[225px] h-[225px] bg-[#F93434] text-2xl flex justify-center items-center rounded-full">
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
