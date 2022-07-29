import { Box, Heading, Text } from '@chakra-ui/react';
import { Location, useLocation } from 'react-router-dom';
import { ControlSetting } from '../components/ControlSetting';
import { Note as SingleNote } from '../components/NoteApp';
import { Wrapper } from '../utils/Wrapper';

type State = {
  note: SingleNote;
};

export const Note: React.FC = () => {
  const statewithType = (location: Location) => {
    const { state } = location;
    return state as State;
  };

  const location = useLocation();
  const state = statewithType(location);
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
        <ControlSetting note={state.note} />
        <Heading size={'lg'}>{state.note.title}</Heading>
        <Text mt={'10px'} opacity={doesBodyexist() ? '100%' : '50%'}>
          {doesBodyexist() ? state.note.body : 'empty'}
        </Text>
      </Box>
    </Wrapper>
  );
};
