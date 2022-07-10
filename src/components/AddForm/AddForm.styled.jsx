import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormConatiner = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  border: 1px solid black;
`;

export const StyledForm = styled(Form)`
  position: relative;
`;

export const SubmitBtn = styled.button`
  width: 46px;
  height: 46px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 3px;
  top: 2px;
`;
