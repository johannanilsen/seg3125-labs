import React, { useRef} from 'react';
import feedbackImg from '../../images/feedback.jpeg'
import "./Feedback.css";




function Feedback() {
    const firstNameRef = useRef(null)
    const lastNameRef =  useRef(null)
    const originRef = useRef(null)
    const messageRef =  useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
  
        const data = {
              firstName: firstNameRef.current.value,
              lastName: lastNameRef.current.value,
              origin: originRef.current.value,
              message: messageRef.current.value
              }
        console.log("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
        alert("Thank you for the review" + data.firstName +"! Your review helps to improve our standard of care and aids others in choosing the right vaction for them!")
  }
    
   return(
    <div className={"container"}>
    <div>
        <img className={"feedbackImage"} src={feedbackImg} alt="feedbackImg" />
    </div>
        <form className="feedbackForm">
        <h1 className={"title"} >Leave a Review</h1>
            <div className={"feedbackForm"}>
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
                    type="origin"
                    name="origin"
                    id="origin"
                    placeholder="Where did you visit us from?"
                    tabIndex="3"
                    ref={originRef}
                />

                <textarea
                placeholder="Tell us about your stay..."
                className="message"
                name="message"
                ref={messageRef}

                />
                <button type="submitReview" className={"button"} onClick={handleSubmit}><b>SUBMIT REVIEW</b></button>

            </div>
            
        </form>
        
  </div>
 )
}
export default Feedback
