"use client"
import React, { useState } from 'react'
import { motion } from "motion/react"

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0) // Start with middle item (index 1)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/sobre" },
    { name: "Contact", href: "/contact" }
  ]

  const handleItemClick = (index: number) => {
    if (selectedIndex === index) {
      // Navigate to the selected item's href
      window.location.href = menuItems[index].href
    }
  }

  const handleItemHover = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex justify-between items-center">
        <motion.div 
          className="flex flex-col justify-center items-center text-xs bg-neutral-800 overflow-hidden gap-1 p-2"
          animate={{
            width: isHovered ? 160 : 128, // 32 * 5 = 160px when hovered
            height: isHovered ? 120 : 40,  // 10 * 12 = 120px when hovered
            borderRadius: isHovered ? 12 : 8,
            boxShadow: isHovered ? "0 8px 32px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.1)"
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            type: "spring",
            stiffness: 400,
            damping: 50
          }}
          onHoverStart={() => {
            setIsHovered(true)
          }}
          onHoverEnd={() => {
            setIsHovered(false)
          }}
        >
          {isHovered ? (
            // Show all items during hover with hover selection
            menuItems.map((item, index) => (
              <h1 
                key={index}
                className={`transition-all duration-200 cursor-pointer p-2 rounded-md w-full h-full ${
                  selectedIndex === index 
                    ? "text-white font-medium bg-neutral-900" 
                    : "text-gray-300 scale-100"
                }`}
                onMouseEnter={() => handleItemHover(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.name}
              </h1>
            ))
          ) : (
            // Show only selected item when not hovered
            <h1 
              className="text-white font-medium scale-105 cursor-pointer transition-all duration-200"
              onClick={() => handleItemClick(selectedIndex)}
            >
              {menuItems[selectedIndex].name}
            </h1>
          )}
        </motion.div>
      </div>
    </div>
  )
}
