import { Heading } from '@chakra-ui/react';

interface MyHeadingProp {
  children: React.ReactNode;
  fontWeight?: number;
  color?: string;
}

export const MyHeading: React.FC<MyHeadingProp> = ({
  children,
  fontWeight = 600,
  color = 'orange.400'
}) => {
  return (
    <Heading
      backgroundColor={'rgb(237, 243, 248, 0.8)'}
      shadow={'xl'}
      fontWeight={fontWeight}
      fontStyle={'italic'}
      fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
      lineHeight={'110%'}
      color={color}
      rounded={'2xl'}
      mb={5}
      p={2}
    >
      {children}
    </Heading>
  );
};
