import mealRecipe from "../assets/mealRecipe.jpg"
import AIResume from "../assets/AiResume.jpg"
import signUp from "../assets/signup.png"

const projectsData =[
  {
      "title": "Meal recipe app",
      "imageSrc": mealRecipe,
      "description": "I have used a third party API to create a meal recipe website that prepares people to cook meals around the world by just following instructions and using specified ingredients.",
      "skills": ["React JS", "API intergration"],
      "demo": "https://delicious-meal-app.onrender.com",
     "source": "https://www.github.com/Sibusiso75/meal-app.git"
    },
   {
      "title": "Chat App",
      "imageSrc":signUp,
      "description": "Developed a Chat App using MERN stack and Socket.io for allowing communication bewteen two or more people.",
      "skills": ["React", "Express", "Node JS", "MongoDB"],
      "demo": "https://chat-application-9xz4.onrender.com",
      "source": "https://github.com/Sibusiso75/chat-app.git"
    },
    
     {
      "title": "AI resume app",
      "imageSrc":AIResume,
      "description": "Building an AI-powered resume application that allowes users to upload their resumes, receive am ATS score and obtain feedback on how to enhance their resumes",
      "skills": [ "React", "Typescript"],
      "demo":"https://ai-resume-analyzer-pied.vercel.app", 
      "source": "https://www.github.com/Sibusiso75/ai-resume-analyzer.git"
    },
     
  ]
export default projectsData
