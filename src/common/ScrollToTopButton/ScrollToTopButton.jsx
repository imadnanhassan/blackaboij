import React, { useEffect, useState } from 'react'
import './ScrollToTopButton.css'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <button
        className={`back-to-top ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <span></span>
      </button>
    </div>
  )
}
