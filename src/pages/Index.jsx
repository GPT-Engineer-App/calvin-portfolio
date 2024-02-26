import React from "react";
import { Box, Container, Heading, Text, VStack, Image, Button, Flex, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1708102215822-1673a6a49a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDYWx2aW4lMjBFbGlqYWh8ZW58MHx8fHwxNzA4OTg2OTY1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Calvin Elijah" marginBottom={4} />
          <Heading as="h1" size="2xl">
            Calvin Elijah
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Full Stack Developer
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Hello! I'm Calvin Elijah, a passionate Full Stack Developer with a knack for creating elegant and efficient web solutions. With a background in computer science and years of experience in the industry, I've honed my skills to bring innovative ideas to life. I specialize in React and Node.js, but I'm always exploring new technologies to stay at the cutting edge of web development.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          {/* List of projects can be mapped from an array of project objects */}
          <VStack spacing={4} alignItems="flex-start">
            <Text as="h3" fontSize="md" fontWeight="bold">
              Project One
            </Text>
            <Text fontSize="md" color="gray.700">
              An innovative platform that revolutionizes the way people connect and collaborate.
            </Text>
            <Text as="h3" fontSize="md" fontWeight="bold">
              Project Two
            </Text>
            <Text fontSize="md" color="gray.700">
              A cutting-edge e-commerce solution that provides a seamless shopping experience for users.
            </Text>
            <Text as="h3" fontSize="md" fontWeight="bold">
              Project Three
            </Text>
            <Text fontSize="md" color="gray.700">
              A robust content management system designed for scalability and ease of use.
            </Text>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Get In Touch
          </Heading>
          <Flex mt={4}>
            <Link href="https://www.linkedin.com/in/calvin-elijah" isExternal>
              <Button colorScheme="linkedin" leftIcon={<Icon as={FaLinkedin} />}>
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/CalvinElijah" ml={2} isExternal>
              <Button colorScheme="gray" leftIcon={<Icon as={FaGithub} />}>
                GitHub
              </Button>
            </Link>
            <Link href="mailto:calvin.elijah@example.com" ml={2} isExternal>
              <Button colorScheme="red" leftIcon={<Icon as={FaEnvelope} />}>
                Email
              </Button>
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
