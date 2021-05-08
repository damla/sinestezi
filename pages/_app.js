import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS="true" theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
