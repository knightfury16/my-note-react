import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteContext } from '../context/noteContext';
import { FormDefaultStyle } from '../utils/FormDeafultStyle';
import { MyHeading } from '../utils/MyHeading';
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
        <MyHeading>Edit Note</MyHeading>
      </Center>
      <FormDefaultStyle>
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
              outlineColor={'rgb(250, 250, 250, 0.8)'}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="body">Body</FormLabel>
            <Textarea
              minH={400}
              id="body"
              outlineColor={'rgb(250, 250, 250, 0.8)'}
              placeholder="body..."
              {...formik.getFieldProps('body')}
            />
          </FormControl>
          <Button colorScheme={'blackAlpha'} onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </Button>
          <Button
            m={4}
            ml={1}
            colorScheme="blackAlpha"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'submitting...' : 'Edit note'}
          </Button>
        </form>
      </FormDefaultStyle>
    </Wrapper>
  );
};
