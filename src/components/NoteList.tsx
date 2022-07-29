import { Box, Center, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { NoteComponent } from './NoteComponent';

export const NoteList: React.FC = () => {
  const noteContext = useContext(NoteContext);
  return (
    <Box ml={'20px'} mt={'15px'}>
      <Center>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'orange.400'}
        >
          Notes
        </Heading>
      </Center>
      <Box
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e'
        }}
        p={5}
        w="full"
        rounded={'md'}
      >
        {noteContext?.notes.map(note => <NoteComponent key={note.id} note={note} />).reverse()}
      </Box>
    </Box>
  );
};
