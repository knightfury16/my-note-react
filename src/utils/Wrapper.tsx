import { Box } from '@chakra-ui/react';

interface WrapperProps {
  children: React.ReactNode;
  variant?: 'small' | 'regular';
  width?: 'fit-content' | '100%';
  height?: 'fit-content' | '100%';
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular',
  width = '100%',
  height = '100%'
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      mb={8}
      maxW={variant === 'regular' ? '800px' : '550px'}
      w={width === 'fit-content' ? 'fit-content' : '100%'}
      //! it just work, don't touch, gonna fix latter.
      h={height === 'fit-content' ? '100vh' : 'fit-content'}
    >
      {children}
    </Box>
  );
};
