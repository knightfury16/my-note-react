import { Box, Button, chakra, Flex, Link } from '@chakra-ui/react';
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
    const snippetLength = 65;
    if (note.body.length > snippetLength) {
      return `${note.body.slice(0, snippetLength)}...`;
    } else {
      return note.body;
    }
  };

  return (
    <Box
      m={10}
      p={4}
      rounded="lg"
      shadow="lg"
      bg="white"
      _dark={{
        bg: 'gray.800'
      }}
      // width={'550px'}
    >
      <Box mt={2}>
        <Link
          as={ReactLink}
          to={`/note/${note.id}`}
          state={{ note }}
          fontSize="2xl"
          color="gray.700"
          _dark={{
            color: 'white'
          }}
          fontWeight="700"
          _hover={{
            color: 'gray.600',
            _dark: {
              color: 'gray.200'
            },
            textDecor: 'underline'
          }}
        >
          {note.title}
        </Link>
        <chakra.p
          mt={2}
          color="gray.600"
          _dark={{
            color: 'gray.300'
          }}
        >
          {getBodySnippet(note)}
        </chakra.p>
      </Box>
      <Flex mt={5} justifyContent={'space-between'} alignContent={'center'}>
        <Link
          as={ReactLink}
          to={`/note/${note.id}`}
          state={{ note }}
          color="brand.600"
          _dark={{
            color: 'brand.400'
          }}
          _hover={{
            textDecor: 'underline'
          }}
        >
          Read more
        </Link>
        <Button
          colorScheme={'blackAlpha'}
          size={'sm'}
          onClick={() => noteContext?.dispatch({ type: 'REMOVE_NOTE', note })}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Box>
  );
};
