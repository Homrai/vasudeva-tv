import { IChannel } from '@/types/tv'
import channelsData from '@/public/data/channels.json'

export function getGenres(): string[] {
  const channels = channelsData as IChannel[]
  const genres = new Set(channels.map((channel) => channel.genre))
  return Array.from(genres).sort()
}

export function filterByGenre(genre: string): IChannel[] {
  const channels = channelsData as IChannel[]
  return channels.filter((channel) => channel.genre === genre)
}
