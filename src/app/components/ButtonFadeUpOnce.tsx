"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import SplitType from 'split-type'
import gsap from 'gsap';



export default function ButtonFadeUpOnce() {

  const textUmRef = useRef(null);
  const textDoisRef = useRef(null);
  const containerMain = useRef(null);

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {

    const splitText = new SplitType(textUmRef.current!, { types: 'chars' });
    const splitTextDois = new SplitType(textDoisRef.current!, { types: 'chars' });
    console.log(splitText.chars);

    gsap.set(splitTextDois.chars, { skewX: -55 });

    tl.to(splitText.chars, {
      y: -25,
      duration: 0.5,
      stagger: { amount: 0.1 },
    })
      .to(
        splitTextDois.chars,
        {
          y: -25,
          skewX: 0,
          duration: 0.5,
          stagger: { amount: 0.1 },
        },
        "<"
      );
  }, [tl]);

  const handleMouseEnter = () => {
    tl.restart(); // Restart the timeline from the beginning
  };

  const handleMouseLeave = () => {
    tl.seek(2).pause(); // Reset the timeline and pause at the beginning
  };

  return(
    <>
    <Link href="/sobre">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={containerMain} className="bg-white px-5 h-[40px] rounded-xl text-orange-600 group transition-all duration-700 flex items-center justify-center">

        <div className="h-[20px] m-0 p-0 flex flex-col justify-start overflow-hidden">
          <p ref={textUmRef} className="" >Sign up</p>
          <p ref={textDoisRef} className="">Sign up</p>
        </div>

      </div>
    </Link>
    </>
  );
}