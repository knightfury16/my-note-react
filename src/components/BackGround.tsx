import { Box } from '@chakra-ui/react';
import bgImage from '../resource/white.jpg';

interface Backgroundprops {
  children: React.ReactNode;
}
export const BackGround: React.FC<Backgroundprops> = ({ children }) => {
  return (
    <Box
      // making the height dynamic on basis of viewport.
      h={'100dvh'}
      backgroundImage={bgImage}
      backgroundRepeat="repeat-y"
      backgroundSize={'100%'}
    >
      {children}
    </Box>
  );
};
