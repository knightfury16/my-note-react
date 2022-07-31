import { Box } from '@chakra-ui/react';

interface WrapperProps {
  children: React.ReactNode;
  variant?: 'small' | 'regular';
  height?: 'fit-content' | '100%';
  width?: number;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular',
  height = '100%',
  width
}) => {
  const getWidth = () => {
    return width !== undefined ? `${width}px` : variant === 'small' ? '550px' : '650px';
  };

  return (
    <Box
      mt={8}
      mx="auto"
      mb={8}
      maxW={getWidth()}
      w={'100vw'}
      //! it just work, don't touch, gonna fix latter.
      h={height === 'fit-content' ? '100vh' : 'fit-content'}
    >
      {children}
    </Box>
  );
};
