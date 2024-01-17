import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  useMediaQuery
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function PersonalPage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Container maxW="container.md" py={8}>
      <Box bg="white" boxShadow="xl" borderRadius="lg" p={isMobile ? 4 : 8}>
        <VStack spacing={4} align="start">
          <Heading as="h1" size="xl">Peter Blanco</Heading>
          <Text fontSize="lg" color="gray.600">
            Senior Product Manager at <Link href="https://www.actioniq.com" isExternal color="blue.500">ActionIQ</Link>
          </Text>
          <Text>
            I'm a Senior Product Manager at ActionIQ with experience in Solutions Engineering,
            Full Stack Software Engineering, and Web design. I graduated
            from Cornell University in 2015 with a B.A. in Computer Science.
          </Text>
          <Text>
            I enjoy working on side projects - please contact me if you would like to work together!
          </Text>
          <Text>Find me on:</Text>
          <HStack spacing={4}>
            <Link href="https://www.linkedin.com/in/peterblanco" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} color="blue.700" />
            </Link>
            <Link href="https://github.com/peterblanco" isExternal>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
}

export default PersonalPage;
