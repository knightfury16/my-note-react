import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NoteApp } from './components/NoteApp';
import { NoteProvider } from './provider/NoteProvider';
import { EditNote } from './routes/EditNote';
import { Note } from './routes/note';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <NoteProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </NoteProvider>
    </ChakraProvider>
  );
};
