import React from 'react'
import { FaUserCheck, FaPhone,  FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdDownload } from "react-icons/md"
import { useNavigate } from 'react-router-dom'

function Header() {
  return (
    <div>
        <span>
<br />
        <img src="../public/Sibusiso'sPic.png" alt=""
            style={{width:"100px", height:"100px", borderRadius:"100px"}} />

<h1>Sibusiso Matebese</h1>
          <p><MdEmail /> SibusisoMatebese75@gmail.com</p>
          <p><FaPhone /> +27 631008729</p>
        </span>
        
    </div>
  )
}

export default Header