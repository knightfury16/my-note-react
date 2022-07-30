import { Box, Center } from '@chakra-ui/react';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { MyHeading } from '../utils/MyHeading';
import { Wrapper } from '../utils/Wrapper';
import { NoteComponent } from './NoteComponent';

export const NoteList: React.FC = () => {
  const noteContext = useContext(NoteContext);
  return (
    <Wrapper width="fit-content">
      <Center>
        <MyHeading>Notes</MyHeading>
      </Center>
      <Box
        backgroundColor={'rgb(237, 243, 248, 0.85)'}
        _dark={{
          bg: '#3e3e3e'
        }}
        p={5}
        w="full"
        shadow={'dark-lg'}
        rounded={'md'}
      >
        {noteContext.notes.length === 0 ? (
          <Box
            m={10}
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            width={'550px'}
          >
            Such Empty...
          </Box>
        ) : (
          noteContext?.notes.map(note => <NoteComponent key={note.id} note={note} />).reverse()
        )}
      </Box>
    </Wrapper>
  );
};
