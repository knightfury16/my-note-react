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
  const getBodySnippet = (note: Note) => {
    const snippetLength = 50;
    if (note.body.length > snippetLength) {
      return `${note.body.slice(0, snippetLength)}...`;
    } else {
      return note.body;
    }
  };
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
        <Link as={ReactLink} to={`/note/${note.id}`} state={{ note }}>
          <Heading fontSize={'3xl'} m={'5px'}>
            {note.title}
          </Heading>
        </Link>
        <Text m={'5px'}>{getBodySnippet(note)}</Text>
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
