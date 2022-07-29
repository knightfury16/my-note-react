import { useLocation, useParams } from 'react-router-dom';
import { EditNoteform } from '../components/EditNoteForm';
import { Note } from '../components/NoteApp';

type State = {
  note: Note;
};

export const EditNote: React.FC = () => {
  const location = useLocation();
  const { note } = location.state as State;
  return <EditNoteform note={note} />;
};
