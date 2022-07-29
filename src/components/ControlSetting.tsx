import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteContext } from '../context/noteContext';
import { Note } from './NoteApp';

interface ControlSettingProp {
  note: Note;
}

export const ControlSetting: React.FC<ControlSettingProp> = ({ note }) => {
  const navigate = useNavigate();
  const noteContext = useContext(NoteContext);
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
      <Button mb={'12px'} colorScheme={'blackAlpha'} size={'sm'} onClick={() => navigate('/')}>
        <ArrowBackIcon />
      </Button>
      <Box>
        <Button
          mb={'12px'}
          colorScheme={'blackAlpha'}
          size={'sm'}
          onClick={() => {
            navigate(`/edit/${note.id}`, { state: { note } });
          }}
        >
          <EditIcon />
        </Button>
        <Button
          ml={'8px'}
          mb={'12px'}
          colorScheme={'blackAlpha'}
          size={'sm'}
          onClick={() => {
            noteContext.dispatch({ type: 'REMOVE_NOTE', note });
            navigate('/');
          }}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};
