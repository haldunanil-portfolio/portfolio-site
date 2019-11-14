import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";

const Flex = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 332px) {
    height: calc(100vh - 275px);
  }

  @media (min-width: 333px) {
    height: calc(100vh - 250px);
  }

  @media (min-width: 760px) {
    height: calc(100vh - 200px);
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex>
      <Header>Not found :(</Header>
      <p>
        This page sadly does not exist. Here&apos;s a cute video of corgi
        puppies to cheer you up:
      </p>
      <iframe
        title="youtube-404-corgis"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uglsVqR88l4"
        // @ts-ignore
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        // @ts-ignore
        allowFullScreen
      />
    </Flex>
  </Layout>
);

export default NotFoundPage;
