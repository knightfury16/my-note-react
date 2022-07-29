import { Box, Heading } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Box
      p={'8px'}
      bg={'facebook.300'}
      textAlign={'center'}
      fontFamily={'sans-serif'}
      fontStyle={'italic'}
      borderBottom={'5px'}
      borderBottomStyle={'solid'}
      borderColor={'facebook.400'}
    >
      <Heading as={'h3'}>My Notes</Heading>
    </Box>
  );
};
