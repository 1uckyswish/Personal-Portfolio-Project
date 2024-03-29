//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiCoffee,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiUsers,
  FiServer,
  FiGlobe,
} from "react-icons/fi";

import { SiCodewars } from "react-icons/si";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Blur from "./assets/img/projects/motion.webp";
import Book from "./assets/img/projects/book.webp";
import House from "./assets/img/projects/house.webp";
import Lgl from "./assets/img/projects/lgl.webp";
import Net from "./assets/img/projects/netflix.2webp.png";
import Store from "./assets/img/projects/shop.webp";
import Sweet from "./assets/img/projects/recipe.webp";
import Weather from "./assets/img/projects/weather.webp";
import Poke from "./assets/img/projects/pokemon.webp";
import Player from "./assets/img/projects/player.webp";
import Insta from "./assets/img/projects/insta.webp";
import Git from "./assets/img/projects/github.webp";
import Baking from "./assets/img/projects/baking.webp";
import Budget from "./assets/img/projects/budget.webp";
// new file pj

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/firebase.png";
import SkillImg6 from "./assets/img/skills/git.png";
import SkillImg7 from "./assets/img/skills/figma.png";
import SkillImg8 from "./assets/img/skills/graphql-icon(11).png";
import SkillImg9 from "./assets/img/skills/tailwind.png";
import SkillImg10 from "./assets/img/skills/bootstrap.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/kelsey.webp";
import TestiImage2 from "./assets/img/testimonials/pam-pfp.webp";
import TestiImage3 from "./assets/img/testimonials/Allan.webp";
import TestImage4 from "./assets/img/testimonials/Byron.webp";
import TestImage5 from "./assets/img/testimonials/tina.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "Skills",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/noel-guillen-blas-b63353257/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/1uckyswish",
  },
  {
    icon: <SiCodewars />,
    href: "https://www.codewars.com/users/NoelGuillen",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/luckideveloper/",
  },
  // {
  //   icon: <FiCoffee />,
  //   href: "https://www.buymeacoffee.com/Luckidev21",
  // },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Insta,
    name: "Instagram Clone",
    category: "FullStack",
    url: "https://instagram-site.vercel.app/",
  },
  {
    id: "2",
    image: Player,
    name: "Music Player",
    category: "FullStack",
    url: "https://thereactmusicplayer.netlify.app/",
  },
    {
    id: "3",
    image: Net,
    name: "Netflix Clone",
    category: "React",
    // url: "netlfix-remake.vercel.app",
    url: "https://netflix-noel.vercel.app/",
  },
   {
    id: "4",
    image: Store,
    name: "Shop Ethereal",
    category: "Vanilla JS",
    url: "https://shopethereal.netlify.app/shop",
  },
   {
    id: "5",
    image: Baking,
    name: "Bakery Shop",
    category: "Vanilla JS",
    url: "https://tous-les-jours.netlify.app/",
  },
    {
    id: "6",
    image: Blur,
    name: "Motion Blurr",
    category: "FullStack",
    url: "https://motionblurr.netlify.app/",
  },
    {
    id: "7",
    image: House,
    name: "Unilife Housing",
    category: "React",
    url: "https://unilifehousing.netlify.app/",
  },
  {
    id: "8",
    image: Budget,
    name: "Finance Tracker",
    category: "FullStack",
    url: "https://budgetfinancetracker.vercel.app/",
  },
   {
    id: "9",
    image: Sweet,
    name: "Edamame Recipe Cooking",
    category: "React",
    url: "https://edamamefinder.netlify.app/",
  },
  {
    id: "10",
    image: Lgl,
    name: "Looking Good Landscape",
    category: "Vanilla JS",
    url: "https://lglbyevan.com/",
  },
  {
    id: "11",
    image: Git,
    name: "Github Finder",
    category: "React",
    url: "https://reactgithubapi.vercel.app/",
  },
  
  // {
  //   id: "12",
  //   image: Book,
  //   name: "Bibliophily",
  //   category: "Vanilla JS",
  //   url: "https://bibliophily.netlify.app/",
  // },
  {
    id: "12",
    image: Weather,
    name: "Weather Forecast",
    category: "React",
    url: "https://weatherbynoel.netlify.app/",
  },
  // {
  //   id: "14",
  //   image: Poke,
  //   name: "Pokemon Generator",
  //   category: "Vanilla JS",
  //   url: "https://pokemongeneratorapi.netlify.app/",
  // },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "FullStack",
  },
  {
    name: "React",
  },

  {
    name: "Vanilla JS",
  },
];

// skill
export const skills = [
  {
    image: SkillImg4,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg1,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
];

// services
export const services = [
  {
    icon: <FiUsers />,
    name: "Team Collaboration",
    description:
      "I thrive in team environments, using open communication and everyones skills to make projects successful. My teamwork style creates a positive atmosphere where we solve problems efficiently and come up with new, smart solutions together.",
  },
  {
    icon: <FiServer />,
    name: "Integration of APIs",
    description:
      "I focus on API Integration, connecting data and functions to create dynamic user experiences. This skill enhances websites with real-time updates and interactive features, boosting user engagement.",
  },
  {
    icon: <FiGlobe />,
    name: "Problem-Solving",
    description:
      "My problem-solving mindset enables me to break down complex web development problems into manageable steps. I can quickly identify and resolve issues, delivering innovative solutions.",
  },
  {
    icon: <FiPenTool />,
    name: "UI Design",
    description:
      "Crafting user-centered UI's that ensure seamless navigation and engagement on the front end.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage3,
    authorText:
      "What truly sets Noel apart is his ability to tackle challenges head-on. He approached each project with a combination of creativity and analytical thinking, consistently producing exceptional results.I am confident in Noels ability to thrive and create a positive impact wherever he chooses to go. I wholeheartedly recommend him to any organization seeking a dedicated, innovative, and dynamic individual.",
    authorName: "Allan Ahmed",
    authorPosition: "Web Developer & Coding Instructor, Mimo",
    link: "https://www.linkedin.com/in/allan-ahmed/",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Demonstrated his desire to fully understand each concept. His projects were excellent and showed that he paid close attention to the details of implementing each feature. He has a passion for this work, and he knows how to learn. I know he will be successful in his tech career!",
    authorName: "Pamela Price",
    authorPosition: "Founder at Jumpstart Code",
    link: "https://www.linkedin.com/in/pamelarprice/",
  },
  {
    authorImg: TestImage4,
    authorText:
      "Noel takes a careful, conscientious approach to software development. In his capacity as a frontend developer at my company, he has been put in situations where he not only had to build new features, but has had to implement those features in technologies new to him. He researches well, he asks the right questions and he writes good code! In addition to strong technical skills, Noels great soft skills make it a pleasure to work with him. He is patient, listens well and is always willing to lend a hand. I say with confidence - speaking from experience - that Noel would make a solid hire",
    authorName: "Byron Holmes",
    authorPosition: "CTO at Sench Systems and Instructor at Fullstack Academy",
    link: "https://www.linkedin.com/in/byron-h-512030175/",
  },
  {
    authorImg: TestImage5,
    authorText:
      "Noel's technical expertise is complemented by his patience and willingness to help others. Whenever I encountered challenges or hit roadblocks in my coding projects, Noel was consistently there to provide guidance and solutions. One of his remarkable qualities is his ability to simplify complex code syntax and concepts, making them understandable. His mentorship has enhanced my coding skills and deepened my comprehension of the underlying principles.",
    authorName: "Tina Nguyen",
    authorPosition: "Self Taught Front-End Developer",
    link: "https://www.linkedin.com/in/tina-ngu/",
  },
  {
    authorImg: TestiImage1,
    authorText:
      "Based on my experience mentoring Noel, I wholeheartedly recommend him for any front-end development position. His combination of technical skills, dedication, and creativity make him an invaluable asset to any team. I am confident that he will continue to excel in his career and contribute significantly to the field of front-end development.",
    authorName: "Kelsey Jackson",
    authorPosition: "Web Developer & Coding Mentor, Mimo",
    link: "https://www.linkedin.com/in/kelsey-jackson-22b098256/",
  },
  // {
  //   authorImg: TestiImage3,
  //   authorText:
  //     'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //   authorName: 'Olivia Doe',
  //   authorPosition: 'Head of Design, Google',
  // },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at noelguillenblas@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    subtitle: "Charlotte, North Carolina, United States",
    // description: 'Serving worldwide',
  },
];
