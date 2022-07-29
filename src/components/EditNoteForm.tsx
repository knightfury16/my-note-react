import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteContext } from '../context/noteContext';
import { validate } from '../utils/NoteValidation';
import { Wrapper } from '../utils/Wrapper';
import { Note } from './NoteApp';

export interface FormInput {
  title: string;
  body?: string;
}

interface EditNoteFormprops {
  note: Note;
}

export const EditNoteform: React.FC<EditNoteFormprops> = ({ note }) => {
  const noteContext = useContext(NoteContext);
  const navigate = useNavigate();

  const didValueChange = (initialvalues: FormInput, currentValues: FormInput) =>
    currentValues !== initialvalues ? true : false;

  const formik = useFormik<FormInput>({
    initialValues: {
      title: note.title,
      body: note.body
    },
    validate,

    onSubmit: values => {
      setTimeout(() => {
        if (didValueChange(formik.initialValues, values)) {
          noteContext?.dispatch({ type: 'EDIT_NOTE', note: { ...values, id: note.id } });
        }
        navigate(`/note/${note.id}`, { state: { note: { ...values, id: note.id } } });
      }, 500);
    }
  });

  return (
    <Wrapper variant="regular">
      <Center>
        <Heading>Edit Note</Heading>
      </Center>
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
        <Button m={4} ml={1} colorScheme="facebook" type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'submitting...' : 'Edit note'}
        </Button>
      </form>
    </Wrapper>
  );
};
