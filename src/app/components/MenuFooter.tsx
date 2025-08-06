"use client"
import React, { useState, useEffect } from 'react'
import './MenuFooter.scss'
import { motion } from 'framer-motion'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

// All sections that should be observed (including home)
const ALL_SECTIONS = [
  { id: 'home', label: 'Home' },
  ...SECTIONS
]

export default function MenuFooter() {
  const [activeSection, setActiveSection] = useState('home')

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

    ALL_SECTIONS.forEach(sectionId => {
      const element = document.getElementById(sectionId.id)
      if (element) observer.observe(element)
    })

    return () => {
      ALL_SECTIONS.forEach(sectionId => {
        const element = document.getElementById(sectionId.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  // Check if current active section is in the SECTIONS array
  const isInSectionsArray = SECTIONS.some(section => section.id === activeSection)

  return (
    <motion.div 
      className="menu-footer__container"
      animate={{
        x: !isInSectionsArray ? 200 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30
      }}
    >
      <div className="menu-footer__item">
        {SECTIONS.map((section) => (
          <div 
            onClick={() => scrollToSection(section.id)}
            key={section.id} 
            className="menu-footer__item-group"
          >
            {/* Label */}
            <div className="menu-footer__item-label">
              <div className="menu-footer__item-label-text">
                {section.label}
              </div>
            </div>
            
            {/* Pill */}
            <button
              className={`menu-footer__item-pill ${
                activeSection === section.id 
                  ? 'menu-footer__item-pill-active' 
                  : 'menu-footer__item-pill-inactive'
              }`}
              title={section.label}
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
