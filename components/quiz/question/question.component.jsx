import {
  Flex,
  Progress,
  Container,
  Button,
  Heading,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Question() {
  const [color, setColor] = useState("");

  return (
    <Flex direction="column" h="100%" align="center" justify="space-evenly">
      <Progress
        hasStripe
        value={100}
        h="3"
        w="100%"
        mb="5"
        boxShadow="dark-lg"
        borderRadius="4px"
      ></Progress>

      <Container
        boxShadow="lg"
        borderRadius="10px"
        border="1px"
        borderColor="gray.300"
        p="5"
        mb="10"
        mt="3"
      >
        <Heading>Sizce Çarşamba hangi renktir?</Heading>
      </Container>

      <ButtonGroup variant="outline" spacing="6" size="lg" direction="column">
        <Flex direction="column" w="100%" space="10px" grow="1">
          <Button
            p="2"
            mt="2"
            boxShadow="lg"
            borderRadius="4px"
            border="2px"
            borderColor="green"
          >
            Yeşil
          </Button>
          <Button
            p="2"
            mt="2"
            boxShadow="lg"
            borderRadius="4px"
            border="2px"
            borderColor="red"
          >
            Kırmızı
          </Button>
          <Button
            p="2"
            mt="2"
            boxShadow="lg"
            borderRadius="4px"
            border="2px"
            borderColor="yellow"
          >
            Sarı
          </Button>
          <Button p="2" mt="2" boxShadow="lg" borderRadius="4px">
            Diğer
            <Input
              borderRadius={3}
              border="none"
              size="sm"
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Button>
          <Button p="2" mt="2" boxShadow="lg" borderRadius="4px">
            Çarşamba'nın rengi mi olur
          </Button>
        </Flex>
      </ButtonGroup>
    </Flex>
  );
}
