import { useRouter } from 'next/router';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  CardBody,
  CardFooter,
  Stack,
  Card,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import { currentProjects } from '@/data/data';
import Layout from '@/componets/Layout';

interface Project {
  id: string;
  title: string;
  location: string;
  status: boolean;
  description: string;
  image: string;
  activities: {
    [key: string]: string;
  }[];
}

const ProjectDetailsPage: React.FC<Project> = () => {
  const router = useRouter();
  const { projectId } = router.query;
  // Find the project based on the projectId from the query
  const project = currentProjects.find((project) => project.id === projectId);
  if (!project) {
    // Render not found page component
    return <div>Project not found</div>;
  }

  // Get the data
  const { id, title, description, image, activities } = project;

  return (
    <Layout>
      <Box py={8} px={4} max-w='800px' mx='auto'>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='/home.jpg'
            alt='Homey Project'
          />

          <Stack>
            <CardBody>
              <Heading color='blue.500' size='2xl' mb={4}>
                {title}
              </Heading>
              <Text py='2' color='gray.500'>
                Juba South Sudan | Ongoing | 2023
              </Text>
              <Text py='5' color='blue.900'>
                {description}
              </Text>
            </CardBody>

            <CardFooter>
              <Link href='/contact'>
                <Button variant='outline' colorScheme='orange'>
                  Partner With Us
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
        <Heading color='blue.500' size='md' mb={4} mt={10}>
          Functional Areas
        </Heading>

        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            {Object.keys(activity).map((key) => (
              <Text key={key} text-lg mb={2}>
                {activity[key as keyof typeof activity]}
              </Text>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Layout>
  );
};

export default ProjectDetailsPage;
