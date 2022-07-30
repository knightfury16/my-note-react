import { Box } from '@chakra-ui/react';

interface WrapperProps {
  children: React.ReactNode;
  variant?: 'small' | 'regular';
  width?: 'fit-content' | '100%';
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular',
  width = '100%'
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === 'regular' ? '800px' : '550px'}
      w={width === 'fit-content' ? 'fit-content' : '100%'}
    >
      {children}
    </Box>
  );
};
