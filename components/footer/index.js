import { Box, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex as="footer" align="center" justify="center" w="100%">
      <Box
        color="white"
        bg="tomato"
        w="100%"
        p={2}
        justify="center"
        align="center"
      >
        Damla ve Emre, {new Date().getFullYear()}©
      </Box>
    </Flex>
  );
}
