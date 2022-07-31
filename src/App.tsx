import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { NoteApp } from './components/NoteApp';
import { NoteProvider } from './provider/NoteProvider';
import { EditNote } from './routes/EditNote';
import { Note } from './routes/note';
import { BackGround } from './components/BackGround';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <NoteProvider>
        <HashRouter>
          <BackGround>
            <Header />
            <Routes>
              <Route path="/" element={<NoteApp />} />
              <Route path="note" element={<Note />}>
                <Route path=":noteId" element={<Note />} />
              </Route>
              <Route path="edit" element={<EditNote />}>
                <Route path=":noteId" element={<EditNote />} />
              </Route>
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </BackGround>
        </HashRouter>
      </NoteProvider>
    </ChakraProvider>
  );
};
