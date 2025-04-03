import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { navigate } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Text from "../components/Text";
import Button from "../components/Button";
import FormField from "../components/FormField";

export interface AboutProps {}

const Image = styled.img`
  max-width: 100%;
`;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name too short!")
    .max(50, "Name too long!")
    .required("Name required!"),
  email: Yup.string().email("Invalid email!").required("Email required!"),
  details: Yup.string().max(250, "Details too long!"),
});

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

class About extends Component<AboutProps> {
  private handleSubmit = (values: any) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then(() => navigate("/thanks"))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Form submission error:", err);
        navigate("/404", {
          state: {
            error: "There was an error submitting the form. Please try again.",
          },
        });
      });
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
              <Text>
                Fill in the fields below and I&apos;ll get back to you.
              </Text>

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
                    data-netlify-recaptcha="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <FormField
                      hidden
                      id="honeypot-field"
                      name="bot-field"
                      placeholder="This is a honeypot!"
                    >
                      Don&apos;t fill this out
                    </FormField>
                    <FormField
                      feedback={errors.name}
                      id="name-field"
                      invalid={touched.name && !!errors.name}
                      name="name"
                      placeholder="Tony Stark"
                    >
                      Name
                    </FormField>
                    <FormField
                      id="email-field"
                      invalid={touched.email && !!errors.email}
                      feedback={errors.email}
                      name="email"
                      placeholder="avengers@assemb.le"
                      type="email"
                    >
                      Email
                    </FormField>
                    <FormField
                      feedback={errors.details}
                      id="details-field"
                      invalid={touched.details && !!errors.details}
                      name="details"
                      placeholder="Talk to me!"
                      type="textarea"
                    >
                      Details
                    </FormField>
                    <div data-netlify-recaptcha="true" />
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
