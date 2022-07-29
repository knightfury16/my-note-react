import { Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Note as SingleNote } from '../components/NoteApp';
import { Wrapper } from '../utils/Wrapper';

type State = {
  note: SingleNote;
};

export const Note: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <Wrapper>
      <Heading>{(state as State).note.title}</Heading>
    </Wrapper>
  );
};
