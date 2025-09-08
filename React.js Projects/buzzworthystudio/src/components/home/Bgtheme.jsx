import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

let image = [
  "https://images.prismic.io/opositivefilms/65e24e05676dc480aae0830a_Screenshot2024-03-01at1.48.32PM.png?auto=format%2Ccompress&rect=335%2C0%2C1187%2C778&w=958&h=628&q=90&width=479&height=314",
  "https://images.prismic.io/opositivefilms/ZmnoSJm069VX1sQ0_c1-02-2x.jpg?auto=format,compress&q=90&width=479&height=314",
  "https://images.prismic.io/opositivefilms/Zw7-I4F3NbkBXe4t_Screenshot2024-10-15at4.42.30PM.png?auto=format%2Ccompress&rect=427%2C0%2C2557%2C1676&w=958&h=628&q=90&width=479&height=314",
  "https://images.prismic.io/opositivefilms/ZxAuv4F3NbkBXmkg_Screenshot2024-10-16at2.22.55PM.png?auto=format%2Ccompress&rect=19%2C35%2C1570%2C1029&w=958&h=628&q=90&width=479&height=314",
  "https://images.prismic.io/opositivefilms/Z88VFRsAHJWomSyQ_Screenshot2025-03-10at9.34.21AM.png?auto=format,compress&q=90&width=479&height=314",
];

function Bgtheme() {
  useGSAP(() => {
    let rows = gsap.utils.toArray("#bgThumbs ul");
    let cards = gsap.utils.toArray("#bgThumbs li");
    let rowItems = gsap.utils.toArray("#bgThumbs li .row-item");

    let row = document.querySelector("#bgThumbs ul");
    let totalWidth = row.scrollWidth;
    let xOffset = (totalWidth - window.innerWidth) / 2;

    if (window.innerWidth > 1024) {
      gsap.set(rows, { x: -xOffset });

      let mouseX = 0;
      let mouseY = 0;
      let ballX = 0;
      let ballY = 0;
      let ballSpeed = 0.015;

      function cursorMove() {
        let distX = mouseX - ballX;
        let distY = mouseY - ballY;

        ballX = Math.round(ballX + distX * ballSpeed);
        ballY = Math.round(ballY + distY * ballSpeed);

        let xHalf = ballX - window.innerWidth / 2;
        let yHalf = ballY - window.innerHeight / 2;

        let xPerc = Math.round((100 / window.innerWidth) * xHalf);
        let yPerc = Math.round((100 / window.innerHeight) * yHalf);

        let row1 = document.querySelector("#bgThumbs ul:first-of-type");
        let row2 = document.querySelector("#bgThumbs ul:nth-of-type(2)");
        let row3 = document.querySelector("#bgThumbs ul:nth-of-type(3)");

        gsap.to(rowItems, {
          rotateX: yPerc / 20,
          rotateY: xPerc / 20,
          xPercent: xPerc / 8,
          stagger: { each: 0.01 },
          duration: 0.0001,
          ease: "linear",
        });

        gsap.to(row1, { x: -xOffset + xPerc * 1.3 });
        gsap.to(row2, { x: -xOffset + xPerc / 1.5 });
        gsap.to(row3, { x: -xOffset + xPerc });

        requestAnimationFrame(cursorMove);
      }

      cursorMove();

      document.addEventListener("mousemove", function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      });
    }
  }, []);
  return (
    <div
      id="bgThumbs"
      className="w-screen h-screen overflow-hidden fixed top-0 left-0 z-[1] py-[10px] opacity-75"
    >
      <ul className="flex justify-between py-[10px] h-[32.7vh]">
        {image.map((src, i) => (
          <li
            key={i}
            className="perspective-[300px] leading-[0] px-[10px] flex-1"
          >
            <img
              src={src}
              alt={`bg-${i}`}
              className="w-full h-full rounded-[5px] overflow-hidden row-item object-cover"
            />
          </li>
        ))}
      </ul>
      <ul className="flex justify-between py-[10px] h-[32.7vh]">
        {image.map((src, i) => (
          <li key={i} className="perspective-[300px] leading-[0] px-[10px]">
            <img
              src={src}
              alt={`bg-${i}`}
              className="w-auto h-full rounded-[5px] overflow-hidden row-item"
            />
          </li>
        ))}
      </ul>
      <ul className="flex justify-between py-[10px] h-[32.7vh]">
        {image.map((src, i) => (
          <li key={i} className="perspective-[300px] leading-[0] px-[10px]">
            <img
              src={src}
              alt={`bg-${i}`}
              className="w-auto h-full rounded-[5px] overflow-hidden row-item"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bgtheme;
