import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  useColorMode,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ExternalLinkIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  let isMobile = useMediaQuery("(max-width: 700px)");

  const mobileHeader = (
    <Flex bg="tomato" p="2" pl="4" pr="4">
      <Box p="2">
        <Heading size="md" color="white">
          <NextLink href="/">Sinestezi</NextLink>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button mr="4" boxShadow="lg" colorScheme="primary" onClick={toggleColorMode}>
          {colorMode === "dark" ? "☀" : "🌙"}
        </Button>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="primary"
            boxShadow="lg"
          />
          <MenuList>
            <NextLink href="/result" passHref>
              <MenuItem icon={<ViewIcon />}>Sonuçları Gör</MenuItem>
            </NextLink>
            <MenuItem icon={<ExternalLinkIcon />}>
              Sinestezi nedir?
                </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );

  const desktopHeader = (
    <Flex bg="tomato" p="2" pl="4" pr="4">
      <Box p="2">
        <Heading size="md" color="white">
          <NextLink href="/">Sinestezi</NextLink>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="primary" boxShadow="lg" mr="4" onClick={toggleColorMode}>
          {colorMode === "dark" ? "☀" : "🌙"}
        </Button>
        <Button mr="4" boxShadow="lg" colorScheme="primary">
          <NextLink href="/result">Sonuçları Gör</NextLink>
        </Button>
        <Button colorScheme="primary" boxShadow="lg">Sinestezi Nedir?</Button>
      </Box>
    </Flex>
  );

  return isMobile[0] ? mobileHeader : desktopHeader;
}
