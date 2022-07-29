import { Box, Heading, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { ControlSetting } from '../components/ControlSetting';
import { Note as SingleNote } from '../components/NoteApp';
import { Wrapper } from '../utils/Wrapper';

type State = {
  note: SingleNote;
};

export const Note: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const doesBodyexist = () => {
    if ((state as State).note.body === '') {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Wrapper>
      <Box bg={'beige'} rounded={'5px'} p={'15px'} minH={'xs'}>
        <ControlSetting />
        <Heading size={'lg'}>{(state as State).note.title}</Heading>
        <Text mt={'10px'} opacity={doesBodyexist() ? '100%' : '50%'}>
          {doesBodyexist() ? (state as State).note.body : 'empty'}
        </Text>
      </Box>
    </Wrapper>
  );
};
