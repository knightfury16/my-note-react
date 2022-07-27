import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { Note } from './NoteApp';

export interface noteProps {
  note: Note;
}

export const NoteComponent: React.FC<noteProps> = ({ note }) => {
  const noteContext = useContext(NoteContext);
  // const postition = useMousePoisition();
  return (
    <>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => noteContext?.dispatch({ type: 'REMOVE_NOTE', note })}>x</button>
    </>
  );
};
