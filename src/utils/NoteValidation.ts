import { FormikErrors } from 'formik';
import { FormInput } from '../components/AddNoteForm';

export const validate = (values: FormInput) => {
  const errors: FormikErrors<FormInput> = {};

  if (!values.title) {
    errors.title = 'Required!';
  } else if (values.title.length > 28) {
    errors.title = 'Must be 28 charecters or less';
  }

  return errors;
};
