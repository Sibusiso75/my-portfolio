import React from 'react'
import {MdFastfood, MdNoMeals, MdSetMeal, MdShop, MdShoppingBag, MdShoppingBasket, MdWork} from "react-icons/md"
function Projects() {

  
  return (
    <div>
         <h3>Personal Projects</h3>
        <div>
          <p><b>1. Meal recipe website</b></p>
          <div>
          </div>
          <div className="imageContainer">
          <img src="../meal.png" alt="" className='image' />

            <p>  
              I have used a third party API to create a meal recipe website that prepares people to cook meals around the world by just following instructions and using specified ingredients.
            </p>
          </div>
          <p>
          </p>
          <div className="links">
            <a href="https://s-mealrecipe.onrender.com">Meal link</a>
          </div>
          <p>
            <b>2. Ecommerce site</b>
          </p>
          <div className="imageContainer">
            <MdShoppingBasket className='icon'/>
            <p>I have developed an ecommerce website using React JS, allowing users to view, search and add items to their cart. Created a cart page, allowing users to increase, decrease quantity and remove items to their shopping cart.
            </p>
          </div>
          <p>

          </p>
          <div className="links">
                      <a href="https://react-ecommerce-site-j4vy.onrender.com">
                        Ecommerce website
          </a>
          </div>

          <p>
            <b>3. Job seeking app</b>
          </p>           
          <div className="imageContainer">
            <MdWork className='icon'/>

          

          <p>I'm developing a job search application where job seekers can create their profiles, search and apply for jobs, share their experience about job hunting . (app still in progress)  </p>
          </div>
          <div className="links">
          <span><a href="https://jobsearchapp-aaoq.onrender.com">Job search app</a></span>
          </div>
          
         
        </div>

    </div>
  )
}

export default Projects