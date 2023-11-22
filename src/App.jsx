import React from 'react'
import "./portfolio.css"
import {FaPhone} from "react-icons/fa"
import {MdEmail} from "react-icons/md"


 
function App() {
  return (
    <>
   <header className='header'>
    <span>
    
      <h1>
      <img src="../dist/SibusisoMatebese'sPicture.png" alt="" 
    style={{width:"90px", height:"90px", borderRadius:"50%"
    }}/>
    <p>    Sibusiso Matebese
</p>
      </h1>
    </span>
   
    <span>
      <p><MdEmail/>SibusisoMatebese75@gmail.com</p>
          
              
      
      <p><FaPhone/>+27 63... Request via email</p>
    </span>
   </header>
   <br />
 
   
   <main className='aboutMe'>
    <h3>About me</h3>
<p>
  I'm a front-end web developer based in Kariega, Eastern Cape.
  I love Technology, solving problems and learning new things. 
  I have built front-end web applications from meal recipe to ecommerce site.
  </p>


<h3>Skills</h3>


  
<ul>

<li>Knowledge of HTML, CSS, JavaScript, React JS and Node</li>
<li>Knowledge of responsive web design </li>
<li>Knowledge of integrating APIs into web appplications </li>
<li>Knowledge of version control system such as git</li>
<li>Knowledge of ContextAPI and useReducer for state
  management in React application
</li>
<li>Excellent problem-solving skills and ability to adapt to new technologies quickly</li>
</ul>

<h3>Personal Projects</h3>
	<p><b>1. Meal and cocktail recipe apps</b></p> 
 <a href="https://github.com/Sibusiso75/react-demo.git">Cocktail app repository</a>
 <a href="https://mealcocktailrecipes.onrender.com">Meal recipe App</a>
 <a href="https://cocktailrecipes.onrender.com">Cocktail recipe App</a>

<ul>
  <li>
  I have used a third party API to create a meal recipe website that prepares people to cook meals around the world by just following instructions and using specified ingredients.
  </li>
  </ul>
  
    <p>
      <b>2. To-do list app</b>
    </p>
  
   <span><a href="https://github.com/Sibusiso75/my-task-list.git">Todo-list repository</a></span>
   <span><a href="https://task-manager-j9wm.onrender.com">Todo list</a></span>

  
<ul>
  <li>
	I have created a to-do list website that helps people to get organised and manage their tasks
  </li>
  </ul>
 
  

  
  
  <p>
    <b>3. React-ecommerce-site</b>
    </p> 
    <a href="https://github.com/Sibusiso75/react-demo.git">E-commerce app repository</a>
    <a href="https://s-react-ecommerce.netlify.app">
  React-ecommerce-site
</a> 
<p>I have implemented the following features: </p>
<ul>
  
  <li>

  Home page to display all the products

  </li>
  <li>
  Add-to-cart.
  </li>
  <li>
  Notification when an item is added to the cart.
  </li>
  <li>
  Single page for a specific item.
  </li>
  <li>
  Cart page to display all items that are added to the cart and total price.
  </li>
  <li>
  Increase and decrease quantities.
  </li>
  </ul>
  


  </main>  
  
   
    </>
  )
}

export default App
    