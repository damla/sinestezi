import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  useColorMode,
} from "@chakra-ui/react";
// import Link from "next/Link";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex bg="tomato" p="2" pl="4" pr="4">
      <Box p="2">
        <Heading size="md" color="white">
          {/* <Link href="/">
            <a>Sinestezi</a>
          </Link> */}
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button mr="4" onClick={toggleColorMode}>
          {colorMode === "dark" ? "☀" : "🌙"}
        </Button>
        <Button mr="4">
          {/* <Link href="/result">Sonuçları Gör</Link> */}
        </Button>
        <Button>Sinestezi Nedir?</Button>
      </Box>
    </Flex>
  );
}
