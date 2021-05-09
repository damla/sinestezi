import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex direction="column" justify="space-between" h="100vh">
      <Header></Header>
      {children}
      <Footer></Footer>
    </Flex>
  );
}
