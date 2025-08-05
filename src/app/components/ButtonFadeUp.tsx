"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import SplitType from 'split-type'
import gsap from 'gsap';

type ButtonVariant = 'simple' | 'fadeUp' | 'fadeUpOnce';

interface ButtonFadeUpProps {
  variant?: ButtonVariant;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ButtonFadeUp({ 
  variant = 'simple', 
  href = "/", 
  children = "Sign up",
  className = ""
}: ButtonFadeUpProps) {

  const textUmRef = useRef(null);
  const textDoisRef = useRef(null);
  const containerMain = useRef(null);

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    if (variant === 'simple') return;

    const splitText = new SplitType(textUmRef.current!, { types: 'chars' });
    const splitTextDois = new SplitType(textDoisRef.current!, { types: 'chars' });
    console.log(splitText.chars);

    if (variant === 'fadeUpOnce') {
      gsap.set(splitTextDois.chars, { skewX: -55 });
    }

    tl.to(splitText.chars, {
      y: -25,
      duration: 0.5,
      stagger: { amount: 0.1 },
    })
    .to(splitTextDois.chars, {
      y: -25,
      ...(variant === 'fadeUpOnce' && { skewX: 0 }),
      duration: 0.5,
      stagger: { amount: 0.1 },
    }, "<"); // The "<" makes this animation start at the same time as the previous one
  }, [tl, variant]);

  const handleMouseEnter = () => {
    if (variant === 'simple') return;
    tl.restart(); // Restart the timeline from the beginning
  };

  const handleMouseLeave = () => {
    if (variant === 'simple') return;
    if (variant === 'fadeUpOnce') {
      tl.seek(2).pause(); // Reset the timeline and pause at the beginning
    } else {
      tl.reverse(); // Reset the timeline and pause at the beginning
    }
  };

  // Simple variant - CSS only
  if (variant === 'simple') {
    return (
      <Link href={href}>
        <div className={`bg-white px-5 h-[40px] rounded-xl text-orange-600 group transition-all duration-700 flex items-center justify-center ${className}`}>
          <div className="h-[20px] m-0 p-0 flex flex-col justify-start overflow-hidden">
            <p className="-translate-y-[1px] group-hover:-translate-y-6 transition-all duration-700 m-0 p-0">
              {children}
            </p>
            <p className="group-hover:-translate-y-6 transition-all duration-700 m-0 p-0">
              {children}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // GSAP variants
  return(
    <Link href={href}>
      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        ref={containerMain} 
        className={`bg-white px-5 h-[40px] rounded-xl text-orange-600 group transition-all duration-700 flex items-center justify-center ${className}`}
      >
        <div className="h-[20px] m-0 p-0 flex flex-col justify-start overflow-hidden">
          <p ref={textUmRef} className="" >{children}</p>
          <p ref={textDoisRef} className="">{children}</p>
        </div>
      </div>
    </Link>
  );
}