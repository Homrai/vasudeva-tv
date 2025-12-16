'use client'

import { useCallback, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import SidebarToggle from './components/SidebarToggle/SidebarToggle'
import VideoPlayer from '@/components/VideoPlayer/VIdeoPlayer'
import Loading from '@/components/Loading/Loading'
import { IChannel } from '@/types/tv'
import './page.css'

export default function TVPage() {
  const [selectedChannel, setSelectedChannel] = useState<IChannel | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsSidebarOpen(true)
      } else {
        setIsSidebarOpen(false)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSelectChannel = useCallback(
    async (channel: IChannel) => {
      if (selectedChannel?.id === channel.id) return

      setIsLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 800))
      setSelectedChannel(channel)
      setIsLoading(false)
    },
    [selectedChannel],
  )
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="loading-wrapper">
          <Loading message={`Cargando canal...`} size="large" />
        </div>
      )
    }

    if (selectedChannel?.url) {
      return (
        <VideoPlayer url={selectedChannel.url} title={selectedChannel.name} />
      )
    }

    return (
      <div className="welcome-message">
        {isMobile && !isSidebarOpen ? (
          <>
            <h2>Welcome to Vasudeva TV</h2>
            <p>Tap the menu button to browse channels</p>
            <div className="welcome-graphic">
              <div className="tv-icon">📺</div>
              <div className="loading-preview">
                <div className="preview-spinner"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Welcome to Vasudeva TV</h2>
            <p>Select a channel from the sidebar to start watching</p>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="tv-page-container">
      <Sidebar
        onSelectChannel={handleSelectChannel}
        selectedChannel={selectedChannel}
        isMobileOpen={isSidebarOpen}
        onMobileClose={() => setIsSidebarOpen(false)}
      />

      <SidebarToggle isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <main className="tv-main-content">
        <div className="content-wrapper">
          {isMobile && isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="back-button"
            >
              <span className="back-arrow">←</span>
              <span>Back to Channels</span>
            </button>
          )}

          {renderContent()}
        </div>
      </main>
    </div>
  )
}
