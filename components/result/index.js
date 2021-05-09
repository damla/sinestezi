import { Container, Heading } from "@chakra-ui/react";

export default function Result() {
  return (
    <Container
      border="8px"
      borderColor="tomato"
      borderRadius="10px"
      p="10"
      align="center"
      justify="center"
    >
      <Heading>Sizde %{10} ihtimalle sinestezi bulunuyor!</Heading>
    </Container>
  );
}
