import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher"

export function useQuestion (id) {
    const { data, error } = useSWR(`/api/question/${id}` , fetcher)

    return {
      question: data,
      isLoading: !error && !data,
      isError: error
    }
}