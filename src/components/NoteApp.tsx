import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
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
          p={'8px'}
          bg={'facebook.300'}
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontStyle={'italic'}
          borderBottom={'5px'}
          borderBottomStyle={'solid'}
          borderColor={'facebook.400'}
        >
          <Heading as={'h3'}>My Notes</Heading>
        </Box>
        <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
          <NoteList />
          <AddNoteForm />
        </Flex>
      </NoteContext.Provider>
    </ChakraProvider>
  );
};
