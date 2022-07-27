import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { validate } from '../utils/NoteValidation';

export interface FormInput {
  title: string;
  body?: string;
}

export const AddNoteForm: React.FC = () => {
  const noteContext = useContext(NoteContext);
  const formik = useFormik<FormInput>({
    initialValues: {
      title: '',
      body: ''
    },
    validate,

    onSubmit: values => {
      setTimeout(() => {
        noteContext?.dispatch({ type: 'ADD_NOTE', note: values });
        formik.resetForm();
      }, 500);
    }
  });

  return (
    <Box mt={8} mx="auto" maxW={'500px'} w={'100%'}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.title && !!formik.errors.title}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            value={formik.values.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="body">Body</FormLabel>
          <Textarea id="body" placeholder="body..." {...formik.getFieldProps('body')} />
        </FormControl>
        <Button m={4} colorScheme="facebook" type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'submitting...' : 'Add note'}
        </Button>
      </form>
    </Box>
  );
};
