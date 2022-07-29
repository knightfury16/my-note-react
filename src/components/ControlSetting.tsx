import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteContext } from '../context/noteContext';
import { Note } from './NoteApp';

interface ControlSettingProp {
  note?: Note;
}

export const ControlSetting: React.FC<ControlSettingProp> = ({ note }) => {
  const navigate = useNavigate();
  const noteContext = useContext(NoteContext);
  console.log(noteContext);
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
      <Button mb={'12px'} colorScheme={'facebook'} size={'sm'} onClick={() => navigate('/')}>
        <ArrowBackIcon />
      </Button>
      <Box>
        <Button mb={'12px'} colorScheme={'facebook'} size={'sm'} onClick={() => navigate('/')}>
          <EditIcon />
        </Button>
        <Button
          ml={'8px'}
          mb={'12px'}
          colorScheme={'facebook'}
          size={'sm'}
          onClick={() => navigate('/')}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};
