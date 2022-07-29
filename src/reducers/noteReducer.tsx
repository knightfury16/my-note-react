import { Note } from '../components/NoteApp';

export type Actions =
  | { type: 'POPULATE_NOTES'; notes: Note[] }
  | { type: 'ADD_NOTE'; note: Note }
  | { type: 'REMOVE_NOTE'; note: Note }
  | { type: 'EDIT_NOTE'; note: Note };
type State = Note[];

export const notesRudcer = (state: State, actions: Actions) => {
  switch (actions.type) {
    case 'POPULATE_NOTES':
      return actions.notes;
    case 'ADD_NOTE':
      return [...state, actions.note];
    case 'REMOVE_NOTE':
      return state.filter(note => note.id !== actions.note.id);
    case 'EDIT_NOTE':
      const noteToEditIndx = state.findIndex(note => note.id === actions.note.id);
      return [...state.slice(0, noteToEditIndx), actions.note, ...state.slice(noteToEditIndx + 1)];
    default:
      return state;
  }
};
