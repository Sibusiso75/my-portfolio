import React from 'react'
import { FaUserCheck,FaPhone, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa"
import { MdEmail, MdDownload } from "react-icons/md"

function Header() {
  return (
    <div>
        <header style={{background:"transparent"}}>
<h1>Sibusiso Matebese</h1>


          <span ><MdEmail/> SibusisoMatebese75@gmail.com</span>
          <p><FaPhone /> +27 631008729</p>
          <span style={{display:"flex", fontWeight:"normal"}}><a href="https://github.com/Sibusiso75" 
          style={{borderLeft:"none", borderRight:"2px double whitesmoke"}}><FaGithub style={{color:"white"}}/></a><a href="https://www.linkedin.com/in/Sibusiso-matebese-8a0600265"
          style={{color:"white",borderLeft:"none"}}> <FaLinkedin/></a>
</span>
</header> 
    </div>
  )
}

export default Header