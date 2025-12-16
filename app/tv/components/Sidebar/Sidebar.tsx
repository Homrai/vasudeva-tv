'use client'

import { useState, useEffect } from 'react'
import channelsData from '@/public/data/channels.json'
import { IChannel } from '@/types/tv'
import './sidebar.css'

interface SidebarProps {
  selectedChannel: IChannel | null
  onSelectChannel: (channel: IChannel) => void
  isMobileOpen?: boolean
  onMobileClose?: () => void
}

export default function Sidebar({
  selectedChannel,
  onSelectChannel,
  isMobileOpen = true,
  onMobileClose,
}: SidebarProps) {
  const [channels, setChannels] = useState<IChannel[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  )
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  useEffect(() => {
    const loadData = async () => {
      const data = channelsData as IChannel[]
      const validChannels = data
      setChannels(validChannels)

      const uniqueGenres = Array.from(
        new Set(validChannels.map((c) => c.genre)),
      )
      setGenres(uniqueGenres.sort())
      setExpandedCategories(new Set(uniqueGenres))
    }
    loadData()
  }, [])

  const toggleCategory = (genre: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(genre)) {
      newExpanded.delete(genre)
    } else {
      newExpanded.add(genre)
    }
    setExpandedCategories(newExpanded)
  }
  const handleChannelClick = (channel: IChannel) => {
    onSelectChannel(channel)
    if (isMobile && onMobileClose) {
      onMobileClose()
    }
  }

  return (
    <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
      <div className="search-section">
        <div className="search-title">Buscar Canal</div>
        <input
          type="text"
          placeholder="Escribe el nombre del canal..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="country-list">
        <div className="category-item all-channels">
          <div
            className="category-header"
            onClick={() => setSelectedGenre(null)}
          >
            <span className="category-name">Todos los canales</span>
            <span className="category-count">{channels.length}</span>
          </div>
        </div>

        {genres.map((genre) => {
          const genreChannels = channels.filter((c) => c.genre === genre)
          const isExpanded = expandedCategories.has(genre)

          return (
            <div
              key={genre}
              className={`category-item ${isExpanded ? 'expanded' : ''} ${
                selectedGenre === genre ? 'selected-category' : ''
              }`}
            >
              <div
                className="category-header"
                onClick={() => toggleCategory(genre)}
              >
                <span className="category-name">{genre}</span>
                <span className="category-count">{genreChannels.length}</span>
              </div>

              <div className="channels-list">
                {isExpanded &&
                  genreChannels.map((channel) => (
                    <div
                      key={channel.id}
                      className={`channel-item ${
                        selectedChannel?.id === channel.id ? 'selected' : ''
                      }`}
                      onClick={() => handleChannelClick(channel)}
                      title={channel.description || channel.name}
                    >
                      <span className="channel-name">{channel.name}</span>
                      {selectedChannel?.id === channel.id && (
                        <div className="selection-indicator"></div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )
        })}
      </div>

      {isMobile && isMobileOpen && (
        <div className="mobile-close-area" onClick={onMobileClose}>
          <div className="mobile-close-btn">
            <span>Cerrar menú</span>
          </div>
        </div>
      )}
    </aside>
  )
}
