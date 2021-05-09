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
  AddIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  let isMobile = useMediaQuery("(max-width: 700px)");
  const router = useRouter();

  const mobileHeader = (
    <Flex bg="tomato" p="2" pl="4" pr="4">
      <Box p="2">
        <Heading size="md" color="white">
          <Link href="/">Sinestezi</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button mr="4" colorScheme="primary" onClick={toggleColorMode}>
          {colorMode === "dark" ? "☀" : "🌙"}
        </Button>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList display={isOpen ? "inherit" : "none"}>
                <MenuItem
                  icon={<ViewIcon />}
                  onClick={() => router.push("/result")}
                >
                  Sonuçları Gör
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>
                  Sinestezi nedir?
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Flex>
  );

  const desktopHeader = (
    <Flex bg="tomato" p="2" pl="4" pr="4">
      <Box p="2">
        <Heading size="md" color="white">
          <Link href="/">Sinestezi</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button mr="4" colorScheme="primary" onClick={toggleColorMode}>
          {colorMode === "dark" ? "☀" : "🌙"}
        </Button>
        <Button mr="4" colorScheme="primary">
          <Link href="/result">Sonuçları Gör</Link>
        </Button>
        <Button colorScheme="primary">Sinestezi Nedir?</Button>
      </Box>
    </Flex>
  );

  return isMobile[0] ? mobileHeader : desktopHeader;
}
