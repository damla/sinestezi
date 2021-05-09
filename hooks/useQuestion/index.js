import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher"

export function useQuestion(qid, initialData) {
    const {error, data} = useSWR(`/api/question/${qid}`, fetcher, initialData)

    return {
      question: data,
      isLoading: !error && !data,
      isError: error
    }
}