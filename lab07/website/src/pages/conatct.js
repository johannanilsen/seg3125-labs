import React, { useRef} from 'react';
import contactImg from '../images/contact.jpeg'
import "./contact.css";




function Conatct() {
    const firstNameRef = useRef(null)
    const lastNameRef =  useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
  
        const data = {
              firstName: firstNameRef.current.value,
              lastName: lastNameRef.current.value,
              email: emailRef.current.value,
              message: messageRef.current.value
              }
        console.log("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
        alert("Thank you " + data.firstName +" your message was successfully submitted!")
  }
    
   return(
    <div className={"container"}>
    <div>
        <img className={"conatctImage"} src={contactImg} alt="contactImg" />
    </div>
    <div>
        <h1 className={"title"} >Contact us</h1>
        <form className="form">
        
            <div className={"contactForm"}>
                <input
                    className={"inputBar"}
                    type="text"
                    name="firstName"
                    tabIndex="1"
                    placeholder="First Name"
                    ref={firstNameRef}
                />
                <input
                    className={"inputBar"}
                    type="text"
                    name="lastName"
                    tabIndex="2"
                    placeholder="Last Name"
                    ref={lastNameRef}
                />
                <input
                    className={"inputBar"}  
                    type="email"
                    name="email"
                    id="email"
                    placeholder="What is your email?"
                    tabIndex="3"
                    ref={emailRef}
                />

                <textarea
                placeholder="Your Questions..."
                className="message"
                name="message"
                ref={messageRef}

                />
                <button type="submit" className={"button"} onClick={handleSubmit}><b>SEND MESSAGE</b></button>

            </div>
            
        </form>
  </div>
  </div>
 )
}
export default Conatct
