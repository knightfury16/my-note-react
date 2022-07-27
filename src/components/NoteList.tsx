import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { NoteComponent } from './NoteComponent';

export const NoteList: React.FC = () => {
  const noteContext = useContext(NoteContext);
  return (
    <Box ml={'20px'} mt={'15px'}>
      {noteContext?.notes.map(note => (
        <NoteComponent key={note.title} note={note} />
      ))}
    </Box>
  );
};
