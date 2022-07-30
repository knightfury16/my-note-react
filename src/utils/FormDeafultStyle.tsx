import { Box } from '@chakra-ui/react';

interface FormDefaultStyleProp {
  children: React.ReactNode;
  opacity?: number;
}

export const FormDefaultStyle: React.FC<FormDefaultStyleProp> = ({ children, opacity = 0.7 }) => {
  return (
    <Box backgroundColor={`rgb(237, 243, 248, ${opacity})`} rounded={'md'} p={10} shadow={'2xl'}>
      {children}
    </Box>
  );
};
