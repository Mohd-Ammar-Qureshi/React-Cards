import react from 'react'
import './App.css'
import Card from './component/Card'
// Card 2222222222222222222222222222222222222222222
function App() {
  const cardData = [
  {
    id: 1,
    status: "Available",
    rate: "$55/hr",
    img: "https://i.pravatar.cc/300?img=11",
    name: "Wade Stark",
    role: "UI/UX Designer",
    company: "Epic Coder",
    skills: ["UI", "UX", "Photoshop", "+4"],
    description:
      "Wade is a 32 year old UI/UX designer with an impressive portfolio behind him",
  },

  {
    id: 2,
    status: "Available",
    rate: "$40/hr",
    img: "https://i.pravatar.cc/150?img=5",
    name: "Tony Stark",
    role: "Frontend Developer",
    company: "Stark Industries",
    skills: ["React", "JS", "CSS", "+2"],
    description:
      "Tony is a skilled frontend developer with strong UI experience",
  },

  {
    status: "available",
    rate: "$55/hr",
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coder",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    skills: ["UI", "UX", "Photoshop"],
    extraSkills: 4,
    description: "Wade is a 32 year old UI/UX designer with an impressive portfolio."
  },
  {
    status: "busy",
    rate: "$70/hr",
    name: "Tony Rogers",
    role: "Frontend Developer",
    company: "Stark Industries",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    skills: ["React", "JavaScript", "CSS"],
    extraSkills: 3,
    description: "Tony specializes in modern frontend frameworks and clean UI design."
  },
  {
    status: "available",
    rate: "$40/hr",
    name: "Natasha Romanoff",
    role: "Product Designer",
    company: "Shield Tech",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    skills: ["Figma", "Wireframing", "UX Research"],
    extraSkills: 5,
    description: "Creative product designer focused on user experience."
  },
  {
    status: "available",
    rate: "$65/hr",
    name: "Bruce Banner",
    role: "Backend Developer",
    company: "Gamma Labs",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    skills: ["Node.js", "MongoDB", "API"],
    extraSkills: 2,
    description: "Backend expert building scalable and secure applications."
  },
  {
    status: "busy",
    rate: "$50/hr",
    name: "Peter Parker",
    role: "Full Stack Developer",
    company: "Web Solutions",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    skills: ["React", "Node", "MySQL"],
    extraSkills: 6,
    description: "Full stack developer with strong problem solving skills."
  },
  {
    status: "available",
    rate: "$45/hr",
    name: "Diana Prince",
    role: "Mobile App Developer",
    company: "Amazon Tech",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    skills: ["React Native", "Flutter", "Firebase"],
    extraSkills: 3,
    description: "Passionate about building high performance mobile apps."
  },
  {
    status: "available",
    rate: "$60/hr",
    name: "Clark Kent",
    role: "DevOps Engineer",
    company: "Daily Planet Tech",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    skills: ["AWS", "Docker", "CI/CD"],
    extraSkills: 4,
    description: "DevOps engineer ensuring smooth deployments and automation."
  },
  {
    status: "busy",
    rate: "$48/hr",
    name: "Steve Rogers",
    role: "UI Developer",
    company: "Avengers Tech",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    skills: ["HTML", "CSS", "Tailwind"],
    extraSkills: 2,
    description: "Focused on responsive and pixel perfect UI development."
  },
  {
    status: "available",
    rate: "$75/hr",
    name: "Stephen Strange",
    role: "AI Engineer",
    company: "Mystic Labs",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    skills: ["Python", "Machine Learning", "TensorFlow"],
    extraSkills: 5,
    description: "AI engineer building intelligent and data driven systems."
  },
  {
    status: "available",
    rate: "$38/hr",
    name: "Wanda Maximoff",
    role: "Graphic Designer",
    company: "Vision Studio",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    skills: ["Illustrator", "Branding", "Logo Design"],
    extraSkills: 3,
    description: "Creative designer with strong branding expertise."
  }

];

  return (
    <div className='parent '>
     {cardData.map((item , index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}

export default App
// <div className=''>{arr.map((itme , index) => <Card key={} data={}/>)}</div> // write in return(..)