import React, { useState } from 'react'
import "./portfolio.css"
import Header from './Header'
import AboutMeAndSkills from './AboutMeAndSkills'
import Projects from './Projects'
import ContactAndFooter from './ContactAndFooter'

function App() {
 


  
  return (
    <>
      <header className='header'>
        <Header/>
      </header>
      <p></p>
      {/* <a href="./sibusisomatebese'sResume.pdf" style={{float:"right", width:"100px", padding:"10px",
    marginRight:"5px", background:"orange",borderLeft:"none", color:"black",
    borderRadius:"5px",textDecoration:"none", fontWeight:"bold"}} download >
      Download CV
    </a> */}
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
