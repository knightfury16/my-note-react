import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { Note } from './NoteApp';
import { DeleteIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

export interface noteProps {
  note: Note;
}

export const NoteComponent: React.FC<noteProps> = ({ note }) => {
  const noteContext = useContext(NoteContext);
  // const postition = useMousePoisition();
  return (
    <Box
      m={'10px'}
      w={'500px'}
      p={'10px'}
      bg={'beige'}
      borderRadius={'2xl'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <Link as={ReactLink} to={`/note/${note.id}`}>
          <Heading fontSize={'3xl'} m={'5px'} _hover={{}}>
            {note.title}
          </Heading>
        </Link>
        <Text m={'5px'}>{note.body}</Text>
      </Box>
      <Button
        colorScheme={'facebook'}
        m={'5px'}
        onClick={() => noteContext?.dispatch({ type: 'REMOVE_NOTE', note })}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
};
