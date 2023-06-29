//import Link from 'next/link';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg='blue.600' as='footer' py={6} mt='100px'>
      <Box maxW='container.xl' mx='auto' px={4}>
        <Flex justify='space-between' alignItems='center'>
          <Box>
            <Text color='white' fontSize='lg' fontWeight='bold'>
              &copy; {new Date().getFullYear()} Homey Investments Limited South
              Sudan
            </Text>
            <Text color='white' fontSize='sm'>
              All rights reserved
            </Text>
          </Box>
          <Flex alignItems='center'>
            <Text fontSize='lg' color='white' fontWeight='bold' mr={4}>
              Follow us on:
            </Text>
            <Link href='/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook color='white' size={24} />
            </Link>
            <Link href='' target='_blank' rel='noopener noreferrer' ml={3}>
              <FaTwitter color='white' size={24} />
            </Link>
            <Link href='/' target='_blank' rel='noopener noreferrer' ml={3}>
              <FaInstagram color='white' size={24} />
            </Link>
          </Flex>
        </Flex>
        <Box mt={4}>
          <Text color='white' fontSize='sm'>
            Address: Hai Dares-Salaam residential area, Plot No. 280, Munuki
            Payam
          </Text>
          <Text color='white' fontSize='sm'>
            Tel: 0923674851, 0918172401
          </Text>
          <Text color='white' fontSize='sm'>
            Email: homeyinvestments2@gmail.com
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
