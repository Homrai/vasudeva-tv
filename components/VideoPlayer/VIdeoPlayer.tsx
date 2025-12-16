'use client'

import './videoPlayer.css'

interface VideoPlayerProps {
  url: string
  title?: string
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  const isDirectVideo =
    url.endsWith('.m3u8') || url.endsWith('.mp4') || url.endsWith('.webm')

  if (isDirectVideo) {
    return (
      <video controls autoPlay muted style={{ width: '100%', height: '100%' }}>
        <source src={url} />
        Your browser does not support video playback.
      </video>
    )
  }

  return (
    <iframe
      src={url}
      title={title || 'Live TV'}
      allow="autoplay; fullscreen"
      allowFullScreen
      className="i-frame-main "
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  )
}
