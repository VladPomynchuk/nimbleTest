import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { updateItems } from 'redux/stopWatchSlice';

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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Field type="text" name="name" />
          <button type="submit">add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;
