import { Box, Heading, Text } from '@chakra-ui/react';
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
      <Box bg={'beige'} rounded={'5px'} p={'15px'} minH={'xs'}>
        <Heading size={'lg'}>{(state as State).note.title}</Heading>
        <Text mt={'10px'}>
          {(state as State).note.body === '' ? 'empty' : (state as State).note.body}{' '}
        </Text>
      </Box>
    </Wrapper>
  );
};
