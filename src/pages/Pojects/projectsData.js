import Ecommerce1 from '../../assets/images/Projects/E-commerce/landing.png'
import Ecommerce2 from '../../assets/images/Projects/E-commerce/products.png'
import Ecommerce3 from '../../assets/images/Projects/E-commerce/BuyProduct.png'
import Ecommerce4 from '../../assets/images/Projects/E-commerce/Dashboard.png'

import AYCourses1 from '../../assets/images/Projects/AY-Courses/Courses1.png'
import AYCourses2 from '../../assets/images/Projects/AY-Courses/Courses2.png'
import AYCourses3 from '../../assets/images/Projects/AY-Courses/Courses3.png'

import game1 from '../../assets/images/Projects/WiinGames/Game1.png'
import game2 from '../../assets/images/Projects/WiinGames/Game2.png'
import game3 from '../../assets/images/Projects/WiinGames/Game3.png'
import game4 from '../../assets/images/Projects/WiinGames/Game4.png'

import chat1 from '../../assets/images/Projects/ChatApp/Chat1.png'
import chat2 from '../../assets/images/Projects/ChatApp/Chat2.png'



export const ProjectsData=[
    {
        name:'AY-Store',
        description :'A full-stack e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, user authentication, order management, and payment integration. Designed with responsive UI and optimized for performance.',
        images:[Ecommerce1,Ecommerce2,Ecommerce3,Ecommerce4],
        features:['Real time chat between users','CRUD Operations'],
        skills:['React.js','Tailwindcss','Node.js','Express.js','Socket.io'],
        access:[{link:'https://github.com/ANTEUR3/E-commerce.git',icon:'gitHub'}]
    },
    // {
    //     name:'AY-Weather',
    //     description :'A real-time weather application that provides accurate weather forecasts for major cities worldwide. Features include current conditions, hourly and daily forecasts, weather alerts, and a user-friendly interface for searching and tracking multiple locations.',
    //     images:[],
    // },
    {
        name:'Wiin Games',
        description :'An interactive educational gaming platform designed to teach children about waste recycling through engaging games at different difficulty levels. Features include interactive recycling challenges, progress tracking, educational content about environmental sustainability, and rewards system to motivate learning.',
        images:[game1,game2,game3,game4],
        skills:['Javascrit','PHP','Mysql','SQL']

    },
    {
        name:'AY-Courses',
        description: 'A comprehensive online learning platform offering specialized courses in Computer Science fields. Features include interactive course modules, video lectures, coding exercises, progress tracking, student assessments, and certificates of completion. Designed to help learners master programming, data structures, algorithms, web development, and other CS fundamentals with hands-on projects.',
        images:[AYCourses1,AYCourses2,AYCourses3],
        skills:['React.js','Next.js','Typescript','Tailwindcss','Node.js'],
        access:[{link:'https://github.com/ANTEUR3/AY-COURSES_.git',icon:'gitHub'}]
    },
    {
        name:'Real time chat application',
        description: 'A real-time messaging platform that enables instant communication between users. Features include live message delivery, user online status, message history, typing indicators, and a clean, responsive chat interface. Built with websocket technology for seamless and low-latency conversations.',
        images:[chat1,chat2],
        access:[{link:'https://github.com/ANTEUR3/E-commerce/tree/master/client/src/pages/ChatPages.jsx',icon:'gitHub'}]
    }
]