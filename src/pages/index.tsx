import React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '@/componets/Layout';
import ItemsCard from '@/componets/ItemsCard';
import { services, developmentProjects, currentProjects } from '../data/data';

import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <Layout>
      {/* Landing page Section */}
      <section className='relative bg-blue-500 py-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-opacity-70'></div>
        <div className='container mx-0 px-0 md:px-0 relative z-10'>
          <Box
            position='relative'
            w='100vw'
            h='70vh'
            bgImage="url('homey3-large.jpg')"
            bgSize='cover'
            bgAttachment='fixed'
            bgPosition='center top-10%'
            opacity={0.8}
          >
            <Box
              position='absolute'
              top='50%'
              right='50%'
              transform='translateY(-50%) translateX(50%)'
              bg='orange.500'
              opacity={0.8}
              p={4}
              color='white'
              textAlign='center'
            >
              <h1 className='text-5xl font-bold mb-4'>
                HOMEY INVESTMENTS LIMITED SOUTH SUDAN
              </h1>
              <h2 className='text-sm font-bold mb-5'>
                <q>Service With Deligence</q>
              </h2>
              <p className='text-lg'>
                We empower young South Sudanese in various business sectors to
                drive local solutions.
              </p>
            </Box>
          </Box>
        </div>
      </section>

      {/* <section className='bg-blue-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-4'>Homey Investments</h1>
          <p className='text-lg'>
            Empowering young South Sudanese in various business sectors to drive
            local solutions.
          </p> 
          <p className='text-lg font-bold'>
            Customer care, Accountability, Integrity, Safeguarding
          </p>
        </div>
      </section> */}

      {/* Services Section */}
      <section className='bg-white-500 py-20'>
        <div className='container mx-auto px-4'>
          <ItemsCard cardTitle='Our Services' services={services} />
        </div>
      </section>

      {/* Projects Section- development projects */}
      <section className='bg-white-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <ItemsCard
            cardTitle='Our Development Projects'
            services={developmentProjects}
          />
        </div>
      </section>

      {/* Projects Section - current projects*/}
      <section className='bg-white-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <ItemsCard
            cardTitle='Our Current Projects'
            services={currentProjects}
            wrapWithLink={true}
            linkUrl='projects'
          />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
