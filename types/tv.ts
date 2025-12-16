export interface ICountry {
  name: string // "Colombia"
  code: string // "CO" (ISO 3166-1 alpha-2)
  languages: string[] // ["spa"]
  flag: string // "🇨🇴" emoji UTF-8
}

export interface IChannel {
  id: string
  name: string
  country: string
  language: string
  genre: string
  type: 'm3u8' | 'youtube'
  url: string
  logo: string
  description: string
}

export interface IStream {
  channel: string // "Caracol-CO"  (ID del canal)
  url: string // URL .m3u8, MPEG-DASH, etc.
  http_referrer?: string // referrer necesario
  user_agent?: string // UA requerido
  geolock?: boolean // si tiene bloqueo geográfico
  status: string // "online" | "offline" | "blocked"
  width?: number // resolución
  height?: number
  bitrate?: number
  frame_rate?: number
}
