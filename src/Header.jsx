import React from 'react'
import { FaUserCheck, FaPhone,  FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdDownload } from "react-icons/md"
import { useNavigate } from 'react-router-dom'

function Header() {
  return (
    <div>
        <span>
          <h1>
            <FaUserCheck /> Sibusiso Matebese
          </h1>
          <p><MdEmail /> SibusisoMatebese75@gmail.com</p>
          <p><FaPhone /> +27 63... Avaible upon request</p>
          <p><FaGithub/>GitHub | <FaLinkedin /> LinkedIn  </p>
        </span>
        
    </div>
  )
}

export default Header