import { createContext } from 'react';
import { Note } from '../components/NoteApp';
import { Actions } from '../reducers/noteReducer';

export interface NoteContextInterface {
  notes: Note[];
  dispatch: React.Dispatch<Actions>;
}
export const NoteContext = createContext<NoteContextInterface | null>(null);
