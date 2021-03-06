import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import bookImg from '../../images/book-room.png'
import { RoomTypes } from "./RoomTypes"
import "./Book_room.css";


function Book_room() {
    const[roomType, setRoomPrice, setTax, setTotal] = useState(0)
    
    var roomPrice = useState(0)
    var tax = useState(0)
    var total = useState(0)

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const creditCardRef = useRef(null)
    const cvvRef = useRef(null)
    const cardHolderRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
  
        const data = {
              name: nameRef.current.value,
              email: emailRef.current.value,
              creditCard: creditCardRef.current.value, 
              cvv: cvvRef.current.value,
              cardHolder: cardHolderRef.current.value
              }
        }

    const CalculateTotal = (e) => {

        if(nameRef === '' || emailRef === '' || creditCardRef === '' || cvvRef ==='' || cardHolderRef === ''){ 
            alert("ERROR: Please fill out all the fields.")
           
        }  
        else { 
            alert("Thank you for booking with Windsor Resort!")
        }
        
    }
   return(
    
    <div className="book-room">    
    
    <form className="book-room-form">
        <div className={"bookForm"} >
           
            <h1 className={"book-title"}>Book a stay</h1>
            <label for="name">Name</label>
            <input
                className={"book-input"}
                type="text"
                name="name"
                id="name"
                tabIndex="1"
                placeholder="Jane Doe"
                ref={nameRef}
              
            />
            <br></br>
            <br></br>
             <label for="email">Email</label>
            <input
                className={"book-input"}  
                type="email"
                name="email"
                id="email"
                placeholder="jdoe123@gmail.com"
                tabIndex="3"
                ref = {emailRef}
            />
             <br></br>
            <br></br>
            <label for="room-type">Room type</label>
            <br></br>
            <select id="room-type" name="room-list" form="room-form">
                <option value="single">Single room - $145 per night</option>
                <option value="double">Double room - $190 per night</option>
                <option value="triple">Triple room - $220 per night</option>
                <option value="suite">Suite - $250 per night</option>
                <option value="studio">Studio - $295 per night</option>
                <option value="cabana">Cabana - $340 per night</option>
                <option value="villa">Villa - $390 per night</option>
            </select>
            <br></br>
            <br></br>
            <label for="number-guests">Number of guests</label>
                <input type="number" id="guests" name="guests"min="0" max="100"></input>
            <br></br>
            <br></br>
            <label for="checkin">Arrival date and time</label>
            <input type="datetime-local" id="checkin"
                name="checkin" value="2022-04-12T19:30"
                min="2022-03-07T00:00" max="2024-06-14T00:00">
            </input>
            <br></br>
            <br></br>
            <label for="checkout">Departure date and time</label>
            <input type="datetime-local" id="checkout"
                name="checkout" value="2022-04-13T19:30"
                min="2022-04-13T00:00" max="2024-06-14T00:00">
            </input>
            <br></br>
            <br></br>
            <label for="creditcardNum">Credit card number and CVV</label>
            <br></br>
            <input type="text" id ="creditcardNum" ref={creditCardRef} placeholder="Credit card number" pattern="^4[0-9]{12}(?:[0-9]{3})?$" onChange="checkFilled()" x-autocompletetype="cc-number"/>
            <input type="text" id="cvv" ref={cvvRef} placeholder="CVV"/>
            <br></br>
            <br></br>
            <label for="cardHolder">Card Holder</label>
            <br></br>
            <input type="text" id ="cardHolder" placeholder="Jane Doe"/>
            <button id="submit-button" onClick={CalculateTotal}>SUBMIT</button>
        </div>
    </form>

</div>

 )
}
export default Book_room

