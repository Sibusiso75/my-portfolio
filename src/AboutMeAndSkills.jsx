import React from 'react'
import {FaDownload, FaHtml5, FaCss3,  FaReact, FaNodeJs, FaDatabase} from "react-icons/fa"
import {MdJavascript} from "react-icons/md"
import {BiGitBranch} from "react-icons/bi"


function AboutMeAndSkills() {
  return (
    <div>
      <div className='aboutMeAndDownload'>

         <h3>About me</h3>
         <a href="./sibusisomatebese'sResume.pdf" className='download' download >
      Download CV
    </a>
      </div>
        <p>
        I'm a web developer based in Kariega, Eastern Cape. I love Technology, learning new things and solving real world problems by developing software.
        I'm seeking for an opportunity to use my skills and work in a team-orianted environment.
        </p>
        <h3>Skills</h3>
        <h4>Front-end technologies</h4>
        HTML <FaHtml5/> CSS <FaCss3/>  JavaScript  <br /><br />React <FaReact/>
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