import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Text from "../components/Text";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { navigate } from "gatsby";

export interface AboutProps {}

const Image = styled.img`
  max-width: 100%;
`;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name too short!")
    .max(50, "Name too long!")
    .required("Name required!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Email required!"),
  details: Yup.string().min(250, "Details too long!")
});

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class About extends Component<AboutProps> {
  private handleSubmit = (values: any, actions: any) => {
    console.log(values);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values
      })
    })
      .then(() => navigate("/thanks"))
      .catch(err => alert(err));
  };

  public render() {
    return (
      <Layout>
        <SEO title="About" />
        <Container style={{ marginTop: 100, paddingBottom: 50 }}>
          <Row>
            <Col xs={12} md={6}>
              <Image src="/hal.jpg" />
            </Col>
            <Col xs={12} md={6}>
              <Header size={2}>Drop me a line!</Header>
              <Text>Fill in the fields below and I'll get back to you.</Text>

              <Formik
                initialValues={{ name: "", email: "", details: "" }}
                onSubmit={this.handleSubmit}
                validationSchema={ContactSchema}
              >
                {({ errors, touched }) => (
                  <Form
                    style={{ marginTop: "1rem" }}
                    name="contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <FormField
                      hidden
                      id="honeypot-field"
                      name="bot-field"
                      placeholder="This is a honeypot!"
                    >
                      Don't fill this out
                    </FormField>
                    <FormField
                      id="name-field"
                      name="name"
                      invalid={touched.name && !!errors.name}
                      feedback={errors.name}
                    >
                      Name
                    </FormField>
                    <FormField
                      id="email-field"
                      name="email"
                      type="email"
                      invalid={touched.email && !!errors.email}
                      feedback={errors.email}
                    >
                      Email
                    </FormField>
                    <FormField
                      id="details-field"
                      name="details"
                      type="textarea"
                      invalid={touched.details && !!errors.details}
                      feedback={errors.details}
                    >
                      Details
                    </FormField>
                    <Button
                      style={{ marginTop: "1rem", width: "100%" }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default About;
