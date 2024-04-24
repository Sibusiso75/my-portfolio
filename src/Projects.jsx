import React from 'react'
import { FaImage } from 'react-icons/fa'

function Projects() {

  
  return (
    <div>
         <h3>Personal Projects</h3>
        <div>
          <p><b>1. Meal and cocktail recipe apps</b></p>
          <div>
          </div>
          <div className="imageContainer">
            <img src="../public/meal.png" className="image" alt="" />
            <p>  
              I have used a third party API to create a meal recipe website that prepares people to cook meals around the world by just following instructions and using specified ingredients.
            </p>
          </div>
          <p>
          </p>
          <div className="links">
            <a href="https://github.com/Sibusiso75/meal-recipe-app.git">Meal repository</a>
            <a href="https://s-mealrecipes.netlify.com">Meal link</a>
          </div>



          <p>
            <b>Task manager App</b>
          </p>
          

          <p>
          </p>
          <div className="links">
         
          <span><a href=" https://github.com/Sibusiso75/my-task-list.git">Task manager repository</a></span>
          <span><a href="https://react-manage-tasks.netlify.app">Task manager link</a></span>
          </div>



          <p>
            <b>3. Quiz App</b>
          
          </p>
          <div className="links">
          <span><a href="https://github.com/Sibusiso75">Quiz App repository</a></span>
          <span><a href="https://reactjs-trivia.netlify.app">Quiz app link</a></span>
            </div>
          <p>
            <b>4. React-ecommerce-site</b>
          </p>
          <div className="imageContainer">
            <p>I have developed an ecommerce website using React JS, allowing users to view, search and filter products by category. Created a cart page, allowing users to increase, decrease quantity and remove items to their shopping cart(app still in progress).
            </p>
          </div>
          <p>

          </p>
          <div className="links">
            
          <a href="https://github.com/Sibusiso75/react-demo.git">E-commerce app repository</a>
          <a href="https://s-react-ecommerce.netlify.app">
            React-ecommerce-site
          </a>
          </div>

        </div>

    </div>
  )
}

export default Projects