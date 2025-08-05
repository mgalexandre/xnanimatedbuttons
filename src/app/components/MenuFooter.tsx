"use client"
import React, { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function MenuFooter() {
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1
      }
    )

    SECTIONS.forEach(sectionId => {
      const element = document.getElementById(sectionId.id)
      if (element) observer.observe(element)
    })

    return () => {
      SECTIONS.forEach(sectionId => {
        const element = document.getElementById(sectionId.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const isLabelVisible = (sectionId: string) => {
    return (activeSection === sectionId && !hoveredSection) || hoveredSection === sectionId
  }

  return (
    <div className="fixed bottom-4 left-[50%] translate-x-[-50%] z-50">
      <div className="flex justify-center items-end">
        {SECTIONS.map((section) => (
          <div 
            key={section.id} 
            className="flex flex-col items-center w-6 group"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Label */}
            <div 
              className={`transition-all duration-500 ease-in-out transform mb-1 ${
                isLabelVisible(section.id)
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="text-neutral-400 font-regular text-xs mix-blend-difference whitespace-nowrap">
                {section.label}
              </div>
            </div>
            
            {/* Pill */}
            <button
              onClick={() => scrollToSection(section.id)}
              className={`transition-all duration-1000 ease-in-out transform rounded-full ${
                activeSection === section.id 
                  ? 'h-6 w-3 bg-[#D9D9D9]/50' 
                  : 'h-5 w-3 bg-[#E8E8E8]/50 hover:bg-[#D9D9D9]/50'
              } backdrop-blur-lg`}
              title={section.label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
