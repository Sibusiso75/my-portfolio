import React from 'react'

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
            <p>  I have used a third party API to create a meal recipe website that prepares people to cook meals around the world by just following instructions and using specified ingredients.
            </p>
          </div>
          <p>
          </p>
          <div className="links">
            <a href="https://github.com/Sibusiso75/react-demo.git">Meal repo</a>
            <a href="https://mealrecipes.onrender.com">Meal link</a>
            <a href="https://cocktailrecipes.onrender.com">Cocktail App</a>
          </div>



          <p>
            <b>2. Movie App</b>
          </p>
          <div className="imageContainer">
            <img src="../public/movieApp.png" className="image" alt="" />
            <> I have created a movie app with MongoDB, Express, React and Node JS. People can search and get an information about their favourite movie
              . Features include: Registration, Login, Forgot password and registered users can write a comment. </>


          </div>

          <p>
          </p>
          <div className="links">
          <span><a href="https://github.com/Sibusiso75/my-task-list.git">Todo-list repository</a></span>
          <span><a href="https://react-manage-tasks.netlify.app">Todo list</a></span>
          </div>



          <p>
            <b>3. Quiz App</b>
          </p>
          <div className="imageContainer">
            <img src="../public/QuizApp.png" className="image" alt="" />
            <p> I have created a Quiz app with React. </p>


          </div>

          <p>
          </p>
          <div className="links">
          <span><a href="https://github.com/Sibusiso75/my-task-list.git">Todo-list repository</a></span>
          <span><a href="https://react-manage-tasks.netlify.app">Todo list</a></span>
            </div>
          <p>
            <b>3. React-ecommerce-site</b>
          </p>
          <div className="imageContainer">
            <img src="../public/Ecommerce.png" className="image" alt="" />
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