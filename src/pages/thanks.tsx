import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Text from "../components/Text";
import { Container } from "reactstrap";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <Container style={{ marginTop: 100 }}>
      <Header>Thanks!</Header>
      <Text>Thanks for your submission, I'll be in touch soon!</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
