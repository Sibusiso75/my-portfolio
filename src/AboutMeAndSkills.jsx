import React from 'react'
import { FaHtml5, FaCss3,  FaReact, FaNodeJs, FaDatabase} from "react-icons/fa"
import {MdJavascript} from "react-icons/md"
import {BiGitBranch} from "react-icons/bi"


function AboutMeAndSkills() {
  return (
    <div>
      <div className='aboutMeAndDownload'>
         <h3>About me</h3>
         <h3 style={{background:"none",
    borderBottom: "none"}}>

         <a href="./sibusisomatebese'sResume.pdf" className='download' download >
      Download cv
    </a>
         </h3>
      </div>
      <div className="meContainer">
      <img src="./Sibusiso'sPic.png" alt="" className="me"/>
      <p className="b">

      I'm a web developer based in Uitenhage, Eastern Cape, South Africa. I have developed responsive web applications from meal recipe to ecommerce website. 
      I'm passionate about developing software and solving problems using technology.
      </p>
      
      </div>

       
        <h3>Skills</h3>
        <div>
          
          <h4>Front-end technologies</h4>
          HTML <FaHtml5/> CSS <FaCss3/>  JavaScript  <br /><br />React <FaReact/>
        </div>
        <h4>Back-end Technologies</h4>
        Node <FaNodeJs/>  Express <MdJavascript/>
        <h4>Database</h4>
        MongoDB <FaDatabase/> SQL <FaDatabase/>
        <h4>Version control system</h4>
        Git <BiGitBranch/>
    </div>
  )
}

export default AboutMeAndSkills