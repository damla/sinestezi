import { Button, Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { useQuestion } from "../hooks/useQuestion"

import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import Quiz from "../components/quiz/quiz.component"

import { questions } from '../data'

export async function getStaticProps() {
  return { props: { questions } }
}

export default function IndexPage(props) {
  const [id, setId] = useState(0);

  const initialData = props.questions[0]
  const { question, isLoading, isError } = useQuestion(id, { initialData } );

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

      <div>{ question.title }!</div>
    </>
  );
}