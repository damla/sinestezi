import { Flex, Container, Button, Spacer, HStack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Question from "./question/question.component";

export default function Quiz() {
  return (
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
}
