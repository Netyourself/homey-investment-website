import React from 'react';
import { Box, Card, Heading, Text, Grid, Button } from '@chakra-ui/react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
}

interface ItemsCardProps {
  services: Service[];
  cardTitle: string;
  wrapWithLink?: boolean;
  linkUrl?: string;
}

const ItemsCard: React.FC<ItemsCardProps> = ({
  services,
  cardTitle,
  wrapWithLink = false,
  linkUrl = '',
}) => {
  return (
    <section className='py-8 bg-red-100'>
      <div className='container mx-auto'>
        <Heading
          as='h2'
          size='xl'
          fontWeight='bold'
          textAlign='center'
          color='orange.500'
          mb='8'
        >
          {cardTitle}
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap='6'
        >
          {services.map((service) =>
            wrapWithLink ? (
              <Link key={service.id} href={`/${linkUrl}/${service.id}`}>
                <Card
                  p='6'
                  bg='white'
                  boxShadow='lg'
                  rounded='lg'
                  _hover={{ cursor: 'pointer', transform: 'scale(1.02)' }}
                >
                  <Heading
                    as='h3'
                    size='md'
                    color='blue.500'
                    fontWeight='bold'
                    mb='4'
                  >
                    {service.title}
                  </Heading>
                  <Text color='gray.500'>{service.description}</Text>
                  <Button variant='outline' colorScheme='orange' mt='4'>
                    View details
                  </Button>
                </Card>
              </Link>
            ) : (
              <Card
                key={service.id}
                p='6'
                bg='white'
                boxShadow='lg'
                rounded='lg'
              >
                <Heading
                  as='h3'
                  size='md'
                  color='blue.500'
                  fontWeight='bold'
                  mb='4'
                >
                  {service.title}
                </Heading>
                <Text color='gray.500'>{service.description}</Text>
              </Card>
            )
          )}
        </Grid>
      </div>
    </section>
  );
};

export default ItemsCard;
