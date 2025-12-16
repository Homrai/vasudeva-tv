// components/SidebarToggle/SidebarToggle.tsx
'use client'

import { useState, useEffect } from 'react'
import './sidebarToggle.css'

interface SidebarToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export default function SidebarToggle({
  isOpen,
  onToggle,
}: SidebarToggleProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsVisible(!isOpen)
      } else {
        setIsVisible(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [isOpen])

  const toggleStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    pointerEvents: isVisible ? 'auto' : ('none' as 'auto' | 'none'),
  }

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onToggle}
          aria-label="Cerrar menú"
        />
      )}

      <button
        className={`sidebar-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        style={toggleStyle}
        aria-label={isOpen ? 'Cerrar menú lateral' : 'Abrir menú lateral'}
        title={isOpen ? 'Ocultar canales' : 'Mostrar canales'}
      >
        <div className="toggle-icon-container">
          <div className="toggle-icon">
            {isOpen ? (
              <>
                <span className="close-line line1"></span>
                <span className="close-line line2"></span>
              </>
            ) : (
              <>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
              </>
            )}
          </div>

          <span className="toggle-label">{isOpen ? 'Cerrar' : 'Canales'}</span>
        </div>
        <div className="notification-dot"></div>
      </button>
    </>
  )
}
