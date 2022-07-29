import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, chakra, Flex, Heading, Text } from '@chakra-ui/react';
import { Link, Location, useLocation } from 'react-router-dom';
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
      <Box
        m={10}
        px={8}
        py={4}
        minH={'xs'}
        rounded="lg"
        shadow="dark-lg"
        bg="white"
        _dark={{
          bg: 'gray.800'
        }}
      >
        <ControlSetting note={state.note} />
        <Box mt={2}>
          <Heading
            fontSize="2xl"
            color="gray.700"
            _dark={{
              color: 'white'
            }}
            fontWeight="700"
          >
            {state.note.title}
          </Heading>
          <chakra.p
            opacity={doesBodyexist() ? '100%' : '50%'}
            mt={2}
            color="gray.600"
            _dark={{
              color: 'gray.300'
            }}
          >
            {doesBodyexist() ? state.note.body : 'empty'}
          </chakra.p>
        </Box>
      </Box>
      {/* <Box bg={'beige'} rounded={'5px'} p={'15px'} minH={'xs'}>
        <ControlSetting note={state.note} />
        <Heading size={'lg'}>{state.note.title}</Heading>
        <Text mt={'10px'} opacity={doesBodyexist() ? '100%' : '50%'}>
          {doesBodyexist() ? state.note.body : 'empty'}
        </Text>
      </Box> */}
    </Wrapper>
  );
};
