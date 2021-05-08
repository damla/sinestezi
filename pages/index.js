import { Button, ButtonGroup, Stack, useColorMode } from "@chakra-ui/react"

export default function IndexPage() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Stack spacing={2} direction="row" align="center">
  <Button colorScheme="teal" size="xs">
    Button
  </Button>
  <Button colorScheme="teal" size="sm">
    Button
  </Button>
  <Button colorScheme="teal" size="md">
    Button
  </Button>
  <Button colorScheme="teal" size="lg">
    Button
  </Button>
</Stack>
    </header>
  )
}
