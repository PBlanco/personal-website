import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  useMediaQuery,
  Highlight,
  ListItem,
  List,
  ListIcon,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';
import { ReactNode } from 'react';

interface CustomBoxProps {
  children: ReactNode;
}

const CustomBox: React.FC<CustomBoxProps> = ({ children }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box bg='#F5F5F5' boxShadow='xl' borderRadius='lg' p={isMobile ? 4 : 8}>
      <VStack spacing={4} align='start'>
        {children}
      </VStack>
    </Box>
  );
};

function PersonalPage() {
  return (
    <Container maxW='container.md' py={8}>
      <VStack spacing={4} align='start'>
        <Heading>Peter Blanco</Heading>
        <Text fontSize='lg' color='gray.600'>
          <Highlight
            query='Product Manager'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}
          >
            Senior Product Manager at
          </Highlight>{' '}
          <Link href='https://www.actioniq.com' isExternal color='blue.500'>
            ActionIQ
          </Link>
        </Text>
        <CustomBox>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaEarthAmericas} color='green.500' />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={FaEarthAmericas} color='green.500' />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={FaEarthAmericas} color='green.500' />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={FaEarthAmericas} color='green.500' />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </CustomBox>
        <CustomBox>
          <Text>
            I enjoy working on side projects - please contact me if you would
            like to work together!
          </Text>
        </CustomBox>
        <CustomBox>
          <Text>Find me on:</Text>
          <HStack spacing={4}>
            <Link href='https://www.linkedin.com/in/peterblanco' isExternal>
              <Icon as={FaLinkedin} w={6} h={6} color='blue.700' />
            </Link>
            <Link href='https://github.com/peterblanco' isExternal>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
          </HStack>
        </CustomBox>
      </VStack>
    </Container>
  );
}

export default PersonalPage;
