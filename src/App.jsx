import React from 'react'
import "./portfolio.css"
import Header from './Header'
import AboutMeAndSkills from './AboutMeAndSkills'
 import Projects from './Projects'
import ContactAndFooter from './ContactAndFooter'


function App() {
 

//npm install axios react-toastify 
  
  return (
    <>
      <header className='header'>
        <Header/>
        <br />
      </header>
      <br />
      <main className='aboutMe'>
       <AboutMeAndSkills/>
       </main>
       <main className="aboutMe">
       <Projects/>
       </main>
       <main className="aboutMe">
       <ContactAndFooter/>
       </main>
    </>
  )
}

export default App
