import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export function App({ Component }) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}
