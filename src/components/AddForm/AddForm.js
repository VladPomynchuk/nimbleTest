import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { updateItems } from 'redux/stopWatchSlice';
import {
  FormConatiner,
  StyledInput,
  StyledForm,
  SubmitBtn,
} from './AddForm.styled';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const schema = yup.object({
  name: yup.string(),
});

const initialValues = {
  name: '',
};

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log('submit value:', value);

    const name =
      value.name === '' ? moment().format('DD.MM.YYYY HH:mm:ss') : value.name;

    dispatch(updateItems({ name, id: nanoid() }));
    resetForm();
  };

  return (
    <FormConatiner>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledInput
            type="text"
            name="name"
            placeholder="Enter tracker name"
          />
          <SubmitBtn type="submit">
            <BsFillPlayCircleFill
              style={{ width: '46px', height: '46px', fill: 'green' }}
            />
          </SubmitBtn>
        </StyledForm>
      </Formik>
    </FormConatiner>
  );
};

export default AddForm;
