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

    const CalculateTotal = (e) => {
       
        alert(e.target.value)

        if (e.target.value === "single")
        {
            //roomPrice = 189.99
            //tax = 24.7
            //total = 214.70
            setRoomPrice(roomPrice = 189.99)
            setTax(24.70)
            setTotal(214.70) 
        } 
        if (e.target.value === "double")
        {
            setRoomPrice({roomPrice:240.99})
            setRoomPrice(219.99)
            setTax(28.60)
            setTotal(248.6) 
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
            />
             <br></br>
            <br></br>
            <label for="room-type">Room type</label>
            <br></br>
            <select id="room-type" onChange={CalculateTotal} name="room-list" form="room-form">
                <option value="single">Single room</option>
                <option value="double">Double room</option>
                <option value="triple">Triple room</option>
                <option value="suite">Suite</option>
                <option value="studio">Studio</option>
                <option value="cabana">Cabana</option>
                <option value="villa">Villa</option>
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
            <input type="text" id ="creditcardNum"  placeholder="Credit card number"/>
            <input type="text" id="cvv"  placeholder="CVV"/>
            <br></br>
            <br></br>
            <label for="cardHolder">Card Holder</label>
            <br></br>
            <input type="text" id ="cardHolder" placeholder="Jane Doe"/>
            <button id="submit-button">SUBMIT</button>
        </div>
    </form>

    <div className="total">
        <h1 className="total-title">Total Cost</h1>
        <div className="total-prices">
            <h2 >Room total: {roomPrice}</h2>
            <h2>Taxes: {tax}</h2>
            <h2 className="total-label">Total: {total}</h2>
        </div>
    </div>
</div>

 )
}
export default Book_room

