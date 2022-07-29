import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import { NoteContext } from '../context/noteContext';

export const Note: React.FC = () => {
  // const params = useParams();
  const noteContext = useContext(NoteContext);
  console.log(noteContext?.notes);
  // const note = noteContext.notes.find(note => note.id === params.noteId);
  return (
    <Box>
      <Heading>"Hello me"</Heading>
    </Box>
  );
};
