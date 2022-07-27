import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { NoteComponent } from './NoteComponent';

export const NoteList: React.FC = () => {
  const noteContext = useContext(NoteContext);
  return (
    <div>
      {noteContext?.notes.map(note => (
        <NoteComponent key={note.title} note={note} />
      ))}
    </div>
  );
};
