import { Button, useColorMode } from "@chakra-ui/react";
import React, { useState } from 'react';
import { useQuestion } from '../hooks/useQuestion'



export default function IndexPage() {
  const [ id, setId ] = useState(1);

  const { colorMode, toggleColorMode } = useColorMode();
  const { question, isLoading, isError } = useQuestion(id);

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>failed to load</div>

  return (
  <>
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>

    <Button onClick={() => setId(id - 1)}>
      Prev
    </Button>
    <Button onClick={() => setId(id + 1)}>
      Next
    </Button>

    <div>{question.title}!</div>
    <div>{question.content}!</div>
  </>
  );
}
