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
  
  import Work1 from './assets/e-commerce.png';
  import Work2 from './assets/hydra.png';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.jpeg';
  import Work5 from './assets/project.jpg';
  import Work6 from './assets/project-6.jpg';
  
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
      name: 'Portfolio',
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
      description: 'Marwa',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Fouad',
    },
  
    // {
    //   id: 3,
    //   title: 'Age : ',
    //   description: '29 Years',
    // },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Egyption',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Cairo',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+01158408272',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'marwa.fouad102@gmail.com',
    },
  
    // {
    //   id: 9,
    //   title: 'Skype : ',
    //   description: 'steve.milner',
    // },
  
    {
      id: 10,
      title: 'Langages : ',
      description: 'Arabic, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '2+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '6+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '8+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '12+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2020 - PRESENT',
      title: 'GIS Developer <span> Edgpro </span>',
      // desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2019 - 2020',
      title: 'Geologist <span> Hamza Associates      </span>',
      // desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2017 - 2018',
      title: 'Demonstrator <span> Ain Shams University      </span>',
      // desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016',
      title: 'Bachelor Degree (faculity of science)<span>Ain Shams University </span>',
      desc: '(GPA: V.Good with Honors )',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Frontend and cross platform mobile development <span> Information Technology Institute(ITI) </span>',
      // desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
    },
  
    // {
    //   id: 6,
    //   category: 'education',
    //   icon: <FaGraduationCap />,
    //   year: '2009',
    //   title: 'Bachelor Degree <span> Tunis High School </span>',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
    // },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '90',
    },
  
    {
      id: 2,
      title: 'css',
      percentage: '90',
    },
  
    {
      id: 3,
      title: 'Javascript',
      percentage: '75',
    },
  
    {
      id: 4,
      title: 'React ',
      percentage: '70',
    },
  
    {
      id: 5,
      title: 'React Native',
      percentage: '60',
    },
  
    {
      id: 6,
      title: 'Jquery',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Angular',
      percentage: '50',
    },
  
    {
      id: 8,
      title: 'SQL Database',
      percentage: '70',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'E-commerce',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS (context)',
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'https://marwaahmedfouad.github.io/E-commerce/#/login',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: ' Landing Page ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Website',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Native (HTML , CSS)',
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: ' Weather Application      ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Video',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React Native ',
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'City Life web Application      ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Video',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: ' React JS',
        },
        // {
        //   icon: <FiExternalLink />,
        //   title: 'Preview : ',
        //   desc: 'www.dribble.com',
        // },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'City Life Mobile Application ',
      details: [
        // {
        //   title: 'Project : ',
        //   desc: 'Website',
        // },
        // {
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          title: 'Language : ',
          desc: 'React Native',
        },
        // {
        //   title: 'Preview : ',
        //   desc: 'www.dribble.com',
        // },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: ' Change Detection Application',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: ' React JS , Mapp',
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },
  ];
  
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
  