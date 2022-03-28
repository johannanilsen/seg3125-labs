import React, { Component } from 'react'; 
import './About.css'
import aboutImg from '../../images/aboutImg.jpg'

class About extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
			
            <div className="About">
                <div className="about-us">
                    <span className="about-title">About Us</span>
                    <span className="info">Our resort is over 150 years old, located in the heart of the Alaskan wilderness, 
                    we have fantastic views of rivers and the mountain range. We have an all inclusive spa, lakeside restaurant, 
                    two saunas and three outdoor hot tubs. We also offer a variety of outdoor excursion packages, including canoeing, 
                    kayaking, hiking, and white water rafting.
					<div class="box1">
						<form action='http://localhost:3001/review'>
						    <button type="submit" className={"button"}><b>Read our reviews!</b></button>
						</form>
					</div> 
                    </span>
                    <img className="aboutImage" src={aboutImg} alt="aboutImg" />
                </div>
          </div>
        )
    }
}

export default About