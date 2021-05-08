import { Button, useColorMode } from "@chakra-ui/react";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function IndexPage() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { data, error } = useSWR('/api/question', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
  <>
    <header>
    </header>
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
    <div>hello {data[0].id}!</div>
  </>
  );
}
