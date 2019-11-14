import React from "react";
import {
  FormGroup,
  Label as RstrapLabel,
  Input as RstrapInput,
  InputProps,
  FormFeedback as RstrapFormFeedback
} from "reactstrap";
import styled from "styled-components";
import { Field } from "formik";

import { font } from "../../styles/utils";

export interface FormFieldProps extends InputProps {}

const Label = styled(RstrapLabel)`
  font-family: ${font("body")};
`;

const Input = styled(RstrapInput)`
  font-family: ${font("body")};
`;

const FormFeedback = styled(RstrapFormFeedback)`
  font-family: ${font("body")};
`;

const FormField: React.SFC<FormFieldProps> = ({
  children,
  className,
  feedback,
  hidden,
  id,
  invalid,
  ...props
}: FormFieldProps) => {
  return (
    <FormGroup
      className={className ? `${className}--wrapper` : undefined}
      id={id ? `${id}--wrapper` : undefined}
      hidden={hidden}
    >
      <Label for={id}>{children}</Label>
      <Field as={Input} id={id} invalid={invalid} hidden={hidden} {...props} />
      <FormFeedback invalid={invalid}>{feedback}</FormFeedback>
    </FormGroup>
  );
};

export default FormField;
