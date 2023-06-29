import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Icon,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa'; // Import the desired FontAwesome icon
import Layout from '@/componets/Layout';
import { teamMembers } from '@/data/data';

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <Box py={8} px={4} maxW='6xl' mx='auto' color='blue.600'>
        <Heading as='h2' size='2xl' mb={8} textAlign='center' color='blue.500'>
          About Us
        </Heading>

        <Stack spacing={8} mb={12}>
          <Box>
            <Heading as='h3' size='lg' mb={4}>
              Company Introduction
            </Heading>
            <Text fontSize='xl' color='blue.800'>
              Homey investments limited South Sudan is a general trading
              company. Formed in 2016 by a group of South Sudanese, the company
              was legally registered with the Ministry of Justices and
              constitutional affairs (37689) of the Republic of South Sudan and
              licensed and regulated by the Central Equatoria state ministry of
              commerce and investments (035768) and Juba city council, national
              revenue authority, Homey Investment LTD, South Sudan provides a
              wide range of business products and services for the past 5 years.
              Driven by the need to fill the gaps in investment opportunities in
              the private sector which has been predominantly dominated by
              foreign investors from the regain, Homey investments LTD was
              formed to empower young south Sudanese in business investment
              opportunities in the areas of hotel and tourism industry,
              information and communication technology (ICT), agriculture and
              food processing, imports and export of commodities, health,
              education sectors, Water, hygiene and sanitation. The company has
              8 years of experience in providing bar, restaurant, entertainment,
              outdoor catering and state-of-the- art executive events, running
              short courses in computer training programs, printing and binding
              services, indoor and outdoor catering services as well as the
              import of essential food commodities.
            </Text>
          </Box>
          {/* Core Values Section */}
          <Box mb={8}>
            <Heading as='h3' size='lg' mb={4}>
              Core Values
            </Heading>
            <Text fontSize='xl' color='blue.800'>
              Customer care
              <br />
              Accountability
              <br />
              Integrity
              <br />
              Safeguarding
            </Text>
          </Box>
          <Box>
            <Heading as='h3' size='lg' mb={4}>
              Mission and Vision
            </Heading>
            <Text fontSize='xl' color='blue.800'>
              Driving local solutions towards local problems through business
              innovations
            </Text>
            <Text fontSize='xl' color='blue.800'>
              Prosperous South Sudan where business investment opportunities are
              aligned to sustainable development goals
            </Text>
          </Box>
        </Stack>

        <Heading as='h3' size='lg' mb={4}>
          Our Team
        </Heading>

        <Wrap spacing={6} fontSize='xl' color='blue.800'>
          {teamMembers.map((member) => (
            <WrapItem key={member.id}>
              <Flex direction='column' alignItems='center'>
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius='full'
                  boxSize='150px'
                  fallbackSrc='/fallback-image.jpg'
                />
                <Heading as='h4' size='md' mt={4}>
                  {member.name}
                </Heading>
                <Text color='gray.500'>{member.profession}</Text>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Layout>
  );
};

export default AboutUsPage;
