import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

// import Work1 from './assets/project-1.jpeg';
// import Work2 from './assets/project-2.jpg';
// import Work3 from './assets/project-3.jpeg';
// import Work4 from './assets/project-4.jpeg';
// import Work5 from './assets/project-5.jpg';
// import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sudhir',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Vishwakarma',
  },

  {
    id: 3,
    title: 'Date Of Birth : ',
    description: '14th, Mar 1994',
  },

  {
    id: 4,
    title: 'Address : ',
    description: 'Mumbai, Kandivali',
  },
  {
    id: 5,
    title: 'Phone : ',
    description: '+91 7710945924',
  },
  {
    id: 6,
    title: 'Email : ',
    description: 'karmasudhir48@gmail.com',
  },
  {
    id: 7,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 8,
    title: 'Freelance : ',
    description: 'Available',
  },

];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - 2020',
    title: 'Front-End Developer <span> Entrance1.com </span>',
    desc: 'Worked as a front-end developer at Entrance1.com, where I developed and optimized user-friendly web applications using HTML, CSS, JavaScript, and React. Focused on creating responsive designs, enhancing UI/UX, and improving website performance. Collaborated with cross-functional teams to deliver seamless and efficient web solutions.,',
  },


  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - 2023',
    title: 'Certification <span> Great Learning </span>',
    desc: 'Completed a front-end web development course at Great Learning, gaining expertise in HTML, CSS, JavaScript, and React. Learned to build responsive web applications, enhance user interfaces, and optimize website performance. Developed hands-on projects to apply core web development concepts effectively.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013 - 2016',
    title: 'Bachelor Degree <span> Nirmala Memorial Foundation College </span>',
    desc: 'Completed a bachelor degree in commerce, gaining a strong foundation in business principles, financial management, and analytical skills.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2011 - 2013',
    title: 'Junior Degree <span> Shree MumbaDevi Junior College </span>',
    desc: 'Successfully completed my junior degree in commerce, gaining essential knowledge in accounting, finance, and business studies.',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '1999 - 2010',
    title: ' <span> Shree Raghuveer English High School </span>',
    desc: 'Completed my schooling, gaining knowledge in various subjects and developing a strong academic foundation. Learned essential skills that have helped me in my education and career.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '68',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 4,
    title: 'ReactJS',
    percentage: '75',
  },

  {
    id: 5,
    title: 'Next.JS',
    percentage: '65',
  },

  {
    id: 6,
    title: 'Bootstrap',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Tailwind',
    percentage: '50',
  },

  {
    id: 8,
    title: 'C',
    percentage: '70',
  },

  {
    id: 9,
    title: 'C++',
    percentage: '30',
  },

  {
    id: 10,
    title: 'Python',
    percentage: '55',
  },

  {
    id: 11,
    title: 'DSA',
    percentage: '25',
  },

  {
    id: 12,
    title: 'MongoDB',
    percentage: '40',
  },

  {
    id: 13,
    title: 'SQL',
    percentage: '60',
  },

  {
    id: 14,
    title: 'PHP',
    percentage: '40',
  },

  {
    id: 14,
    title: 'Angular',
    percentage: '20',
  },

  {
    id: 14,
    title: 'Typescript',
    percentage: '10',
  },

  {
    id: 15,
    title: 'GIT',
    percentage: '55',
  },
  
  
];

// export const portfolio = [
//   {
//     id: 1,
//     img: Work1,
//     title: 'Photo Editing',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Photo',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'Adobe Photoshop',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: 'Preview : ',
//         desc: 'www.dribble.com',
//       },
//     ],
//   },

//   {
//     id: 2,
//     img: Work2,
//     title: 'Website Design',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Website',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'React JS',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: 'Preview : ',
//         desc: 'www.dribble.com',
//       },
//     ],
//   },

//   {
//     id: 3,
//     img: Work3,
//     title: 'Video Editing',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Video',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'Adobe Premium',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: 'Preview : ',
//         desc: 'www.dribble.com',
//       },
//     ],
//   },

//   {
//     id: 4,
//     img: Work4,
//     title: 'Video Editing',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Video',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'Adobe Premium',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: 'Preview : ',
//         desc: 'www.dribble.com',
//       },
//     ],
//   },

//   {
//     id: 5,
//     img: Work5,
//     title: 'Landing Page',
//     details: [
//       {
//         title: 'Project : ',
//         desc: 'Website',
//       },
//       {
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         title: 'Language : ',
//         desc: 'React JS, Node JS',
//       },
//       {
//         title: 'Preview : ',
//         desc: 'www.dribble.com',
//       },
//     ],
//   },

//   {
//     id: 6,
//     img: Work6,
//     title: 'Photo Editing',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Photo',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'Adobe Photoshop',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: 'Preview : ',
//         desc: 'www.dibble.com',
//       },
//     ],
//   },
// ];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
