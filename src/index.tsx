import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { App } from './components/NoteApp';
import { Note } from './routes/me';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="note" element={<Note />}>
          <Route path=":noteId" element={<Note />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
