import React, { Component } from 'react'; 
import './Review.css'
import reviewImg from '../../images/review.jpeg'

class Review extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }
	handleLanguage = () => {
        console.log(this.state.changeLangugae)

        this.setState({ changeLangugae: !this.state.clicked })
    }

    render() { 
        return(
            <div className="Review">
                <div className="customer-reviews">
                    <h3 className="review-title">{this.state.changeLangugae ? "Vad folk säger om Windsor Resort" : "What people are saying about Windsor Resort"}</h3>
					<br></br>
					<br></br>
					<br></br>
					<h3 className="review-subtitle">{this.state.changeLangugae ? "Över 3 000 5-stjärniga recensioner!" :"Over 3000 5-star reviews and counting!"}</h3>
 		   			<span className="info">{this.state.changeLangugae ? "Rekommenderar starkt att ta med hela familjen, här finns något för alla att njuta av. - Paul, Winnipeg, MB": "Highly recommend bringing the whole family, there is something here for everyone to enjoy. - Paul, Winnipeg, MB"}</span>
					<br></br>
					<br></br>
					<br></br>
					<span className="info">{this.state.changeLangugae ? "Allt var som utlovat. Vilket fantastiskt sätt att ta in Alaskas råa skönhet! - Moemi, Kyoto, Japan" : "Everything was as promised. What a great way to take in the raw beauty of Alaska!- Moemi, Kyoto, Japan" }</span>
					<br></br>
					<br></br>
					<br></br>
					<span className="info">{this.state.changeLangugae ? "Jag hade den bästa tiden någonsin!- Tina, Saguaro, AZ": "I had the best time ever!- Tina, Saguaro, AZ "}
					<br></br>
					<br></br>
					<div class="box1">
					<form action='/feedback'>
			    		<button type="submit" className={"button"}><b>{this.state.changeLangugae ? "Haft en trevlig vistelse? Klicka här för att lämna en recension!" : "Enjoy your stay? Click here to leave a review!" }</b></button>
					</form>
					</div>
					<button className={"translate"} onClick={this.handleLanguage} disabled={this.state.changeLangugae}><b>Översätt</b></button>

					</span>

					 <img className="reviewImg" src={reviewImg} alt="reviewImg" />
                </div>
          </div>
        )
    }
}

export default Review