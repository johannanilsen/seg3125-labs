import React, { Component } from 'react'; 
import './Review.css'
import aboutImg from '../../images/aboutImg.jpg'

class Review extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
            <div className="Review">
                <div className="customer-reviews">
                    <span className="review-title">What people are saying about Windsor Resort: Over 3000 5-star reviews and counting!</span>
                    <span className="review-body">I had the best time ever! -Tina
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<div class="box2">
						<button class="leaveAReviewButton"><span>Enjoy your stay? Click here to leave a review!</span></button>
					</div> 
                    </span>
                </div>
          </div>
        )
    }
}

export default Review