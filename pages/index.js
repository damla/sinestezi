import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuestion } from "../hooks/useQuestion";

import Quiz from "../components/quiz/quiz.component";

import { questions } from "../data";
import Layout from "../components/layout/layout.component";

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
      <Layout>
        <Quiz></Quiz>
      </Layout>

      <Button onClick={() => setId(id - 1)}>Prev</Button>
      <Button onClick={() => setId(id + 1)}>Next</Button>

      <div>{ question.title }!</div>
    </>
  );
}
