import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { MyHeading } from '../utils/MyHeading';
import { validate } from '../utils/NoteValidation';
import { Wrapper } from '../utils/Wrapper';

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
        noteContext?.dispatch({ type: 'ADD_NOTE', note: { ...values, id: nanoid() } });
        formik.resetForm();
      }, 500);
    }
  });

  return (
    <Wrapper variant="small">
      <Center>
        <MyHeading>Add Notes</MyHeading>
      </Center>
      <Box backgroundColor={'rgb(237, 243, 248, 0.65)'} rounded={'md'} p={10} shadow={'2xl'}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.title && !!formik.errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              name="title"
              type="text"
              outlineColor={'rgb(250, 250, 250, 0.8)'}
              placeholder="title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="body">Body</FormLabel>
            <Textarea
              minH={200}
              id="body"
              outlineColor={'rgb(250, 250, 250, 0.8)'}
              placeholder="body..."
              {...formik.getFieldProps('body')}
            />
          </FormControl>
          <Button
            m={4}
            ml={1}
            colorScheme={'blackAlpha'}
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'submitting...' : 'Add note'}
          </Button>
        </form>
      </Box>
    </Wrapper>
  );
};
