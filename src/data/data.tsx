import { FaBlackTie, FaPizzaSlice, FaCloudMoonRain } from 'react-icons/fa';

export const currentProjects = [
  {
    id: '1',
    status: 'Ongoing',
    datestarted: '2022',
    dateCompleted: '2023',
    location: 'Juba South Sudan',
    title: 'Bar and Restaurant Services',
    description:
      'Well-equipped with modern equipment and highly qualified chefs, our restaurant provides a variety of foods and drinks, including meat products, pancakes, pizza, juices of all types, cakes, vegetables, and local foods. Our chefs have over 15 years of experience in training and preparing high-quality foods meeting international standards.',
    image: '/path/to/bar-restaurant-image.jpg',
    activities: [
      {
        activity1:
          'Proving Food including meat products, pancakes, pizza,cakes, vegetables, and local foods',
        activity2: 'Provision of all types of drinks and juices ',
      },
    ],
    beneficiaries: [],
  },
  {
    id: '2',
    status: 'Ongoing',
    datestarted: '2022',
    dateCompleted: '2023',
    location: 'Juba South Sudan',
    title: 'Training in Catering and Food Processing',
    description:
      'Empowering out-of-school and economically vulnerable adolescents, girls, boys, young women, and men (15-24) in income-generating activities to increase employment opportunities and income for a positive lifelong impact.',
    image: '/path/to/catering-food-processing-image.jpg',
    activities: [
      {
        activity1:
          'Provide financial literacy training to target beneficiaries',
        activity2:
          'To train target beneficiaries in income-generating opportunities such as local manufacturing (making cake, ice cream, juice, catering and management)',

        activity3:
          'Identify employment opportunities and connections through various platforms',
      },
    ],
    beneficiaries: [],
  },
  {
    id: '3',
    status: 'Ongoing',
    datestarted: '2022',
    dateCompleted: '2023',
    location: 'Juba South Sudan',
    title: 'Computer Training Program',
    description:
      'The lab is well equipped and managed by highly trained ICT professionals able to respond to the needs of customers. We offer certificate courses in computer applications, computer networking, and computer repair and maintenance.',
    image: '/path/to/computer-training-image.jpg',
    activities: [
      {
        activity1: 'Certificate in computer applications',
        activity2: 'Certificate in computer networking',
        activity3: 'Certificate in computer repair and maintenance',
      },
    ],
    beneficiaries: [],
  },
  {
    id: '4',
    status: 'Ongoing',
    datestarted: '2022',
    dateCompleted: '2023',
    title: 'Consultancy Services',
    location: 'Juba South Sudan',
    description:
      'We offer designing and implementing operational research, research data analysis, and office cleaning services.',
    image: '/path/to/consultancy-services-image.jpg',
    activities: [
      {
        activity1: 'Designing and implementing operational research',
        activity2: 'Research data analysis',
        activity3: 'Office cleaning services',
      },
    ],
    beneficiaries: [],
  },
  {
    id: '5',
    status: 'Stoped',
    datestarted: '2022',
    dateCompleted: '2024',
    location: 'Juba South Sudan',
    title: 'Information and Communication Technology (ICT) Services',
    description:
      'We provide printing, binding, lamination services, as well as procurement of office supplies and equipment.',
    image: '/path/to/ict-services-image.jpg',
    activities: [
      {
        activity1: 'Printing',
        activity2: 'Binding of all types',
        activity3: 'Lamination',
        activity4: 'Procurement of office supplies and equipment',
      },
    ],
    beneficiaries: [],
  },
  {
    id: '6',
    status: 'Completed',
    datestarted: '2022',
    dateCompleted: '2023',
    location: 'Juba South Sudan',
    title: 'Emergency WASH Facilities',
    description:
      'We specialize in the installation of hand washing facilities, supply of liquid soap and hand sanitizers in response to the COVID-19 pandemic.',
    image: '/path/to/emergency-wash-image.jpg',
    activities: [
      {
        activity1: 'Installation of hand washing facilities',
        activity2:
          'supply of liquid soap and hand sanitizers in response to the COVID-19 pandemic',
      },
    ],
    beneficiaries: [],
  },
];
export const developmentProjects = [
  {
    id: '1',
    title: 'Tourism',
    description:
      'Tourism, entrainment and hotel industry development (construction of hotels,beaches, resorts well fitted with bars, restaurants',
    image: '/path/to/catering-food-processing-image.jpg',
  },
  {
    id: '2',
    title: 'Education',
    description: 'Education sector development ',
    image: '/path/to/catering-food-processing-image.jpg',
  },
  {
    id: '3',
    title: 'Health',
    description:
      'Health sector development (development of hospitals, importation of medicines, and other pharmaceutical products) ',
    image: '/path/to/catering-food-processing-image.jpg',
  },
  {
    id: '4',
    title: 'Agriculture',
    description:
      ' Agribusiness (poultry, beef and dairy farming), and food processing ( local oils, floor processing, seed production)',
    image: '/path/to/catering-food-processing-image.jpg',
  },
  {
    id: '5',
    title: 'Manufacturing and processing',
    description: 'Local manufacturing (oils, soap making, knitting, pottery,',
    image: '/path/to/catering-food-processing-image.jpg',
  },
  {
    id: '6',
    title: 'Land Survey',
    description: 'Land survey and estate development ',
    image: '/path/to/catering-food-processing-image.jpg',
  },
];
export const services = [
  {
    id: '1',
    title: 'Food Supply',
    description:
      'Supply of food items (beans, cooking oils, lentils, rice, posho and serials)',
    icon: 'FaPizzaSlice',
  },
  {
    id: '2',
    title: 'Non-Food Items Supply',
    description:
      'Supply of non-food items such as tents, cooking utensils, cups, plates, chairs,buckets',
    icon: 'FaCloudMoonRain',
  },
  {
    id: '3',
    title: 'Information Communication Technology(ICT)',
    description:
      'ICT- printing and binding services, procurement and supply of office equipment, and supplies',
    icon: 'computer',
  },
  {
    id: '4',
    title: 'Water, Sanitation and Hygiene (WASH)',
    description:
      'WASH facilities (installation of water facilities, hand washing buckets, supply of liquid soap and hand sanitisers, waste management)',
    icon: 'wash',
  },
  {
    id: '5',
    title: 'Education',
    description: 'Construction of temporary learning spaces/schools',
    icon: 'education',
  },
  {
    id: '6',
    title: 'Land Survey',
    description:
      'Land survey and construction of emergency shelters for internally displaced persons and refugees',
    icon: 'wash',
  },
];

export const teamMembers = [
  {
    id: 1,
    name: 'Bojo Sam',
    profession: 'CEO',
    image: '/bojo.jpg',
  },
  {
    id: 2,
    name: 'Doru Lilian',
    profession: 'Acting Managing Director',
    image: '/doru.jpg',
  },
  {
    id: 3,
    name: 'Bosco Inyani',
    profession: 'Sales and Marketing Manager',
    image: '/bosco.jpg',
  },
];
