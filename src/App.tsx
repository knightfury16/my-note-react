import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NoteApp } from './components/NoteApp';
import { NoteProvider } from './provider/NoteProvider';
import { EditNote } from './routes/EditNote';
import { Note } from './routes/note';

import bgImage from './resource/dark.jpg';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <NoteProvider>
        <BrowserRouter>
          <Box
            h={'100%'}
            backgroundImage={bgImage}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={'cover'}
            // backgroundColor={'#e5e4e2'}
            // backgroundColor={'#4ca1af'}
            // bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            // bgGradient="linear(#e5e4e2 0%, #f5f5f5 100%)"
          >
            <Header />
            <Routes>
              <Route path="/" element={<NoteApp />} />
              <Route path="note" element={<Note />}>
                <Route path=":noteId" element={<Note />} />
              </Route>
              <Route path="edit" element={<EditNote />}>
                <Route path=":noteId" element={<EditNote />} />
              </Route>
            </Routes>
          </Box>
        </BrowserRouter>
      </NoteProvider>
    </ChakraProvider>
  );
};
