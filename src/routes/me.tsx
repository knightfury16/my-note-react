import { Box, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Note as SingleNote } from '../components/NoteApp';

type State = {
  note: SingleNote;
};

export const Note: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <Box mx={'auto'} maxWidth={'700px'} width={'100%'}>
        <Heading>{(state as State).note.title}</Heading>
      </Box>
    </>
  );
};
