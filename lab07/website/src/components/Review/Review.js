import React, { Component } from 'react'; 
import './Review.css'
import reviewImg from '../../images/review.jpeg'

class Review extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
            <div className="Review">
                <div className="customer-reviews">
                    <h3 className="review-title">What people are saying about Windsor Resort</h3>
					<br></br>
					<br></br>
					<br></br>
					<h3 className="review-subtitle">Over 3000 5-star reviews and counting!</h3>
 		   			<span className="info">Highly recommend bringing the whole family, there is something here for everyone to enjoy. - Paul, Winnipeg, MB</span>
					<br></br>
					<br></br>
					<br></br>
					<span className="info">Everything was as promised. What a great way to take in the raw beauty of Alaska!- Moemi, Kyoto, Japan</span>
					<br></br>
					<br></br>
					<br></br>
					<span className="info">I had the best time ever!- Tina, Saguaro, AZ
					<br></br>
					<br></br>
					<div class="box1">
					<form action='/feedback'>
			    		<button type="submit" className={"button"}><b>Enjoy your stay? Click here to leave a review!</b></button>
					</form>
					</div>
					</span>
					 <img className="reviewImg" src={reviewImg} alt="reviewImg" />
                </div>
          </div>
        )
    }
}

export default Review