import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ControlSetting: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button mb={'12px'} colorScheme={'facebook'} size={'sm'} onClick={() => navigate('/')}>
      <ArrowBackIcon />
    </Button>
  );
};
