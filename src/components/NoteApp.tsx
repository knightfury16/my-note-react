import { Flex } from '@chakra-ui/react';
import { AddNoteForm } from './AddNoteForm';
import { NoteList } from './NoteList';

interface props {
  initialNote?: Note[];
}
export type Note = { id: string; title: string; body?: string };

export const NoteApp: React.FC<props> = ({ initialNote = [] }) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
      <NoteList />
      <AddNoteForm />
    </Flex>
  );
};
