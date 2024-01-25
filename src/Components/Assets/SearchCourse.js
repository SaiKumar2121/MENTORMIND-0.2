import python_beginner from '../Assets/python_beginner.png'
import python_core from '../Assets/oop--2-.png'
import python_end_to_end from '../Assets/python_end_end.jpg'
import node_beginner from '../Assets/Node.js-Tutorial.jpeg'
import node_core from '../Assets/core-concepts-nodejs.png'
import node_end_to_end from '../Assets/Best-Way-to-Learn-NodeJS-A-Complete-Roadmap.png'
import react_begginer from '../Assets/react-about.161b6954402b99bc8101.jpg'
import react_core from '../Assets/react-js.webp'
import react_end_to_end from '../Assets/react-end.png'

const CourseSearch = [
  {
    id: 1,
    name: 'Python for beginners',
    image: python_beginner,
    price: 399,
    free: 'Free',
    description: 'Kickstart your programming journey with Python for beginners. This course covers the fundamentals and practical aspects of Python programming.',
    roadmap: 'Basic syntax, data types, control flow, functions, etc.',
    reviews: 4.5,
    totalStudents: 1000,
    totalHours: 40,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'

  },
  {
    id: 2,
    name: 'Python core concepts',
    image: python_core,
    price: 399,
    free: 'Free',
    description: 'Dive deep into Python core concepts, including object-oriented programming, advanced data structures, and best practices.',
    roadmap: 'Advanced topics, OOP, modules, libraries, etc.',
    reviews: 4.8,
    totalStudents: 1200,
    totalHours: 45,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 3,
    name: 'Python end to end',
    image: python_end_to_end,
    price: 399,
    free: 'Free',
    description: 'Master Python end to end with real-world projects, optimization techniques, and advanced topics. Elevate your Python skills to the next level.',
    roadmap: 'Real-world projects, best practices, optimization, etc.',
    reviews: 4.7,
    totalStudents: 1500,
    totalHours: 50,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 4,
    name: 'NodeJs for beginners',
    image: node_beginner,
    price: 399,
    free: 'Free',
    description: 'Get started with Node.js for beginners. Learn the basics, asynchronous programming, npm, and build your first Node.js applications.',
    roadmap: 'Node.js basics, asynchronous programming, npm, etc.',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 5,
    name: 'NodeJs core concepts',
    image: node_core,
    price: 399,
    free: 'Free',
    description: 'Explore the core concepts of Node.js. Understand event-driven architecture, streams, modules, and build scalable server-side applications.',
    roadmap: 'Event-driven architecture, streams, modules, etc.',
    reviews: 4.6,
    totalStudents: 1000,
    totalHours: 42,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 6,
    name: 'NodeJs 2023',
    image: node_end_to_end,
    price: 399,
    free: 'Free',
    description: 'Stay updated with Node.js in 2023. Cover advanced features, best practices, and performance tuning to build high-performance applications.',
    roadmap: 'Advanced features, best practices, performance tuning.',
    reviews: 4.9,
    totalStudents: 2000,
    totalHours: 55,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 7,
    name: 'ReactJs for beginners',
    image: react_begginer,
    price: 399,
    free: 'Free',
    description: 'Introduction to React.js for beginners. Learn React basics, components, props, and state management to build dynamic user interfaces.',
    roadmap: 'React basics, components, props, state, etc.',
    reviews: 4.3,
    totalStudents: 900,
    totalHours: 38,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 8,
    name: 'ReactJs core concepts',
    image: react_core,
    price: 399,
    free: 'Free',
    description: 'Explore the core concepts of React.js. Learn advanced React features, state management with hooks, and context API.',
    roadmap: 'Advanced React features, hooks, context, etc.',
    reviews: 4.7,
    totalStudents: 1100,
    totalHours: 47,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 9,
    name: 'ReactJs end to end',
    image: react_end_to_end,
    price: 399,
    free: 'Free',
    description: 'End-to-end coverage of React.js development. Build real-world projects, optimize for performance, and follow best practices.',
    roadmap: 'Real-world projects, optimization, best practices.',
    reviews: 4.8,
    totalStudents: 1300,
    totalHours: 52,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 10,
    name: 'Machine-Learning',
    image: '',
    price: 399,
    free: 'Free',
    description: '',
    roadmap: '',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 11,
    name: 'Digital Marketing',
    image: '',
    price: 399,
    free: 'Free',
    description: '',
    roadmap: '',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 12,
    name: 'DBMS',
    image: '',
    price: 399,
    free: 'Free',
    description: '',
    roadmap: '',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 13,
    name: 'JavaScript end to end',
    image: '',
    price: 399,
    free: 'Free',
    description: '',
    roadmap: '',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 14,
    name: 'Content Writing',
    image: '',
    price: 399,
    free: 'Free',
    description: '',
    roadmap: '',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  },
  {
    id: 15,
    name: 'My SQL',
    image: '',
    price: 399,
    free: 'Free',
    description: '',
    roadmap: '',
    reviews: 4.2,
    totalStudents: 800,
    totalHours: 35,
    videoUrl: 'https://www.youtube.com/watch?v=hEgO047GxaQ&t=1s'
  }
]

export default CourseSearch
