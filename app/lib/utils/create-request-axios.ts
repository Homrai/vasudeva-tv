import axios, { Method } from 'axios'
export const customAxiosRequest = async (
  url: string,
  method: Method,
  params?: Record<string, string | number>,
) => {
  try {
    const { data } = await axios.request({
      url,
      method,
      params,
    })

    return { data }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Request error'
    throw new Error(message)
  }
}
