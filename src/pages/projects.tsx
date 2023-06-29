import ItemsCard from '@/componets/ItemsCard';
import {
  Box,
  Card,
  Heading,
  Text,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { currentProjects, developmentProjects } from '../data/data';
import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import Layout from '@/componets/Layout';

import 'tailwindcss/tailwind.css';

const ProjectsPage = () => {
  return (
    <Layout>
      {/* section for sliding project photos */}
      <section className='bg-white-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <ItemsCard
            cardTitle='Our Development Projects'
            services={developmentProjects}
          />
        </div>
      </section>
      <section className='bg-white-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <ItemsCard
            cardTitle='Our Current Projects'
            services={currentProjects}
            wrapWithLink={true}
            linkUrl='/projects'
          />
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
