import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { Note } from './NoteApp';
import { DeleteIcon } from '@chakra-ui/icons';

export interface noteProps {
  note: Note;
}

export const NoteComponent: React.FC<noteProps> = ({ note }) => {
  const noteContext = useContext(NoteContext);
  // const postition = useMousePoisition();
  return (
    <Box
      m={'10px'}
      p={'10px'}
      bg={'beige'}
      borderRadius={'2xl'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <Heading as={'h5'} m={'5px'}>
          {note.title}
        </Heading>
        <Text m={'5px'}>{note.body}</Text>
      </Box>
      <Button m={'5px'} onClick={() => noteContext?.dispatch({ type: 'REMOVE_NOTE', note })}>
        <DeleteIcon />
      </Button>
    </Box>
  );
};
