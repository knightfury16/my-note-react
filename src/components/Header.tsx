import { Center, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <Heading
      backgroundColor={'rgb(237, 243, 248, 0.85)'}
      shadow={'dark-lg'}
      fontWeight={'extrabold'}
      fontStyle={'normal'}
      fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
      lineHeight={'110%'}
      color={'rgb(223, 54, 45,0.8)'}
      saturate={'150%'}
      p={3}
    >
      <Center>
        <Link
          as={ReactLink}
          to={`/`}
          _dark={{
            color: 'brand.400'
          }}
          _hover={{
            textDecor: 'none'
          }}
        >
          My Notes
        </Link>
      </Center>
    </Heading>
  );
};
