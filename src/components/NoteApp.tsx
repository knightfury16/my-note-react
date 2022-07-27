import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import React, { useEffect, useReducer } from 'react';
import { NoteContext } from '../context/noteContext';
import { notesRudcer } from '../reducers/noteReducer';
import { AddNoteForm } from './AddNoteForm';
import { NoteList } from './NoteList';

interface props {
  initialNote?: Note[];
}
export type Note = { title: string; body?: string };

export const App: React.FC<props> = ({ initialNote = [] }) => {
  const [notes, dispatch] = useReducer(notesRudcer, initialNote);

  useEffect(() => {
    const localNotes = localStorage.getItem('notes');
    if (localNotes) {
      dispatch({ type: 'POPULATE_NOTES', notes: JSON.parse(localNotes) });
    }
  }, []);

  useEffect(() => {
    console.log('saving to local');
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <ChakraProvider>
      <NoteContext.Provider value={{ notes, dispatch }}>
        <Box
          bg={'facebook.300'}
          textAlign={'center'}
          fontSize={'30px'}
          // fontWeight={'bold'}
          fontFamily={'heading'}
          fontStyle={'italic'}
        >
          <h1>My Notes</h1>
        </Box>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <NoteList />
          <AddNoteForm />
        </Flex>
      </NoteContext.Provider>
    </ChakraProvider>
  );
};
