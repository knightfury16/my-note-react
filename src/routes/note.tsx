import { Box, chakra, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { ControlSetting } from '../components/ControlSetting';
import { Note as SingleNote } from '../components/NoteApp';
import { Wrapper } from '../utils/Wrapper';

type State = {
  note: SingleNote;
};

export const Note: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // ! Refactor this
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
    <Wrapper width={750} height="fit-content">
      <Box
        m={10}
        minH={'xs'}
        p={6}
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
            mb={5}
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
            whiteSpace={'pre'}
          >
            {doesBodyexist() ? state.note.body : 'empty'}
          </chakra.p>
        </Box>
      </Box>
    </Wrapper>
  );
};
