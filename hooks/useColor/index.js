import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher"

export function useColor(cid, initialData) {
    const {error, data} = useSWR(`/api/color/${cid}`, fetcher, initialData)

    return {
      color: data,
      isLoading: !error && !data,
      isError: error
    }
}