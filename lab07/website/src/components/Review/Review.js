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
                    <span className="review-title">What people are saying about Windsor Resort</span>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<span className="review-subtitle">Over 3000 5-star reviews and counting!</span>
                    <span className="review-body">I had the best time ever!
					<br></br>
					&nbsp;&nbsp;- Tina
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
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