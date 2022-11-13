import styled from "@emotion/styled";
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  border: ${p => p.theme.borders.normal};
  display: inline-flex;
  min-width: ${p => p.theme.sizes[6]}px;
  flex-direction: column;
  align-items: flex-start;
  padding: ${p => p.theme.space[3]}px;
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
`;