import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component";
import Result from "../components/result/result.component";

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
