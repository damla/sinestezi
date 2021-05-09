import {
  Button,
  Spacer,
  HStack,
  Stack,
  useMediaQuery,
  ButtonGroup,
  Flex,
  StackDivider,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Question from "./question/question.component";

export default function Quiz() {
  let isMobile = useMediaQuery("(max-width: 700px)");

  const desktopQuiz = (
    <HStack spacing="6">
      <Spacer></Spacer>
      <Button
        variant="outline"
        size="lg"
        boxShadow="lg"
        p="4"
        alignSelf="flex-end"
      >
        <ArrowBackIcon></ArrowBackIcon> &nbsp; Önceki
      </Button>
      <Spacer></Spacer>
      <Question></Question>
      <Spacer></Spacer>
      <Button
        variant="outline"
        size="lg"
        boxShadow="lg"
        p="4"
        alignSelf="flex-end"
      >
        Sonraki &nbsp; <ArrowForwardIcon></ArrowForwardIcon>
      </Button>
      <Spacer></Spacer>
    </HStack>
  );

  const mobileQuiz = (
    <Stack
      direction="column"
      spacing="12"
      align="center"
      justify="center"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Question></Question>
      <Flex
        w="100%"
        direction="row"
        spacing="6"
        align="center"
        justify="space-around"
      >
        <Spacer />
        <Button variant="outline" size="lg" boxShadow="lg" p="4">
          <ArrowBackIcon></ArrowBackIcon> &nbsp; Önceki
        </Button>
        <Spacer></Spacer>
        <Button variant="outline" size="lg" boxShadow="lg" p="4">
          Sonraki &nbsp; <ArrowForwardIcon></ArrowForwardIcon>
        </Button>
        <Spacer></Spacer>
      </Flex>
    </Stack>
  );

  return isMobile[0] ? mobileQuiz : desktopQuiz;
}
