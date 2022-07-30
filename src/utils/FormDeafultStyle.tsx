import { Box } from '@chakra-ui/react';

interface FormDefaultStyleProp {
  children: React.ReactNode;
}

export const FormDefaultStyle: React.FC<FormDefaultStyleProp> = ({ children }) => {
  return (
    <Box backgroundColor={'rgb(237, 243, 248, 0.7)'} rounded={'md'} p={10} shadow={'2xl'}>
      {children}
    </Box>
  );
};
