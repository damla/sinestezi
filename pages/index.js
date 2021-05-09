import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuestion } from "../hooks/useQuestion";

import Quiz from "../components/quiz/quiz.component";

import { questions } from "../data";
import Layout from "../components/layout/layout.component";

export async function getStaticProps() {
  const id = 1;
  const question = questions[id];
  return { props: { id, question } };
}

export default function IndexPage(props) {
  const [id, setId] = useState(props.id);

  const { question, isLoading, isError } = useQuestion(id);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <Layout>
        <Quiz></Quiz>
      </Layout>

      <Button onClick={() => setId(id - 1)}>Prev</Button>
      <Button onClick={() => setId(id + 1)}>Next</Button>

      <div>{question.title}!</div>
      <div>{question.content}!</div>
    </>
  );
}
