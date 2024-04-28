import React, {useState} from 'react'
import  axios from "axios"

function ContactAndFooter() {
    const [firstName, setfirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [message, setMessage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        axios.post("https://emailAPI.onrender.com", 
           {firstName, lastName, email, phoneNumber, message}).then((response)=>{           
               if(response.data.status){
                   alert(response.data.message)
               } else{
                alert("Email not sent")
               }
        }).catch(err =>{
            console.log("Error")
            

        })
    }
    return (
        <div>
            <h3>Contact me</h3>
            <p><b>Feel free to reach out to me through the form, I'll get back to you.</b></p>
            <form onSubmit={handleSubmit}>
                    <input type="text"
                        required
                        autoComplete='off'
                        onChange={(e) => setfirstName(e.target.value)}

                        placeholder='First Name' />

                    <input type="text"
                        required
                        autoComplete='off'
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Last Name' />

              
                    <input type="email"
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email' />
                    <input type="number"
                        autoComplete='off'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        placeholder='Phone number...' />
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder='Write a message...'
                        />
                    <button type="submit">Submit</button>
            </form>
            <br /><br />
            <footer className="footer">
                <p>Made with ♥ By Sibusiso Matebese</p>
                <p>© Copyright 2024. All Rights reserved</p>
            </footer>
        </div>
    )
}
export default ContactAndFooter