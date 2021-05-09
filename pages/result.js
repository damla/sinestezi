import Header from "../components/header";
import Footer from "../components/footer";
import Result from "../components/result";

import { Flex } from "@chakra-ui/react";

export default function ResultPage() {
  return (
    <Flex direction="column" justify="space-between" h="100vh">
      <Header></Header>
      <Result></Result>
      <Footer></Footer>
    </Flex>
  );
}
