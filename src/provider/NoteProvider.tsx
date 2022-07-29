import { useReducer, useEffect } from 'react';
import { NoteContext } from '../context/noteContext';
import { notesRudcer } from '../reducers/noteReducer';

interface NoteProviderProps {
  children: React.ReactNode;
}
export const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
  const [notes, dispatch] = useReducer(notesRudcer, []);

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

  return <NoteContext.Provider value={{ notes, dispatch }}>{children}</NoteContext.Provider>;
};
