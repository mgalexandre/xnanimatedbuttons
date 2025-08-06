"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

const menuItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Info',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function NavbarBottom() {
  const tl = gsap.timeline()
  const tlHover = gsap.timeline({
    paused: true,
  })

  const handleClick = () => {
    if (tl.reversed()) {
      tl.play()
    } else {
      tl.reverse()
    }
  }

  useEffect(() => {
    const split = SplitText.create(".navbar-bottom", { type: "words" });
    tl.from(split.words, {
      opacity: 1,
      y: 30,
      duration: 0.5,
      ease: 'power1.inOut',
      stagger: 0.15,
    })
    tlHover.to(".three-dots", {
      duration: 0.3,
      ease: 'easeInOut',
      width: '6px',
      gap: '0px',
      borderRadius: '100%',
    })
  }, [tl, tlHover])

  return (
    <nav className="navbar-bottom flex relative">
    <ul className="flex items-center font-bold text-sm justify-center gap-2 overflow-hidden w-full">
      {menuItems.map((item) => (
        <Link href={item.href} key={item.label} className='navbar-bottom-items'>
          {item.label}
        </Link>
      ))}
      <div onMouseEnter={() => tlHover.play()} onMouseLeave={() => tlHover.reverse()} onClick={handleClick} className="three-dots w-full gap-1 flex justify-center ml-2 cursor-pointer">
        <div className="h-[6px] w-[6px] bg-black "></div>
        <div className="h-[6px] w-[6px] bg-black"></div>
        <div className="h-[6px] w-[6px] bg-black"></div>
      </div>
    </ul>
    </nav>
  )
}
