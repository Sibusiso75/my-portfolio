import mealRecipe from "../assets/top-view-food-ingredients-with-vegetable-soup-bowl-notebook.jpg"
import Ecommerce from "../assets/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online.jpg"
import JobSearch from "../assets/career-employment-occupation-recruitment-work-concept.jpg"


const projectsData =[
    
    {
      "title": "Ecommerce site",
      "imageSrc": Ecommerce,
      "description": "Developed an ecommerce website where users can browse, search, filter and add products to their shopping cart. Implemented cart functionality, allowing users to increase and decrease quantity ",
      "skills": [ "React", "CSS", "Node JS"],
      "demo":"https://ecommerce-g5is.onrender.com/", 

      "source": "https://www.github.com/Sibusiso75/s-ecommerce.git"
    },
    {
      "title": "Meal recipe app",
      "imageSrc": mealRecipe,
      "description": "I have used a third party API to create a meal recipe website that prepares people to cook meals around the world by just following instructions and using specified ingredients.",
      "skills": ["React JS", "API"],
      "demo": "https://s-mealrecipe.onrender.com/",
      "source": "https://www.github.com"
    },
    {
      "title": "Job search app",
      "imageSrc": JobSearch,
      "description": "'m developing a fullstack job search application where job seekers can create their profiles, search, browse, apply for jobs and write about what's on their mind. (website in progress",
      "skills": ["React", "Express", "Node JS", "MongoDB"],
      "demo": "https://jobsearchapp-aaoq.onrender.com/",
      "source": "https://www.github.com/Sibusiso75"
    }
  ]
export default projectsData