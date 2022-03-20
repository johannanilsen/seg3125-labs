import React, { Component } from 'react'; 
import './About.css'

class About extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
            <div className="About">
                <div className="about-us">
                    <span class="about-title">About Us</span>
                    <span class="info">Our resort is over 150 years old, located in the heart of the Alaskan wilderness, we have fantastic views of rivers and the mountain range. We have an all inclusive spa, lakeside restaurant, two saunas and three outdoor hot tubs. We also offer a variety of outdoor excursion packages, including canoeing, kayaking, hiking, and white water rafting.</span>
                </div>
          </div>
        )
    }
}

export default About