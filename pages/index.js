import { Button, Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { useQuestion } from "../hooks/useQuestion"

import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import Quiz from "../components/quiz/quiz.component"

import { questions } from '../data'

export async function getStaticProps() {
  const id = 1
  const question = questions[id]
  return { props: { id, question } }
}

export default function IndexPage(props) {
  const [id, setId] = useState(props.id);

  const { question, isLoading, isError } = useQuestion(id);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <Flex direction="column" justify="space-between" h="100vh">
        <Header />
        <Quiz></Quiz>
        <Footer />
      </Flex>

      <Button onClick={() => setId(id - 1)}>Prev</Button>
      <Button onClick={() => setId(id + 1)}>Next</Button>

      <div>{question.title}!</div>
      <div>{question.content}!</div>
    </>
  );
}