import React, { Component } from 'react'; 
import './About.css'
import aboutImg from '../../images/aboutImg.jpg'


class About extends Component { 
    state = { clicked:false, 
              changeLangugae: false
            }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }
    handleLanguage = () => {
        console.log(this.state.changeLangugae)

        this.setState({ changeLangugae: !this.state.clicked })
    }



    render() { 
        return(
			
            <div className="About">
                <div className="about-us">
                    <span className="about-title">{this.state.changeLangugae ? "Om oss" :"About Us"}</span>
                    <span className="info">{this.state.changeLangugae ? "Vår resort är över 150 år gammal, belägen i hjärtat av Alaskas vildmark, vi har fantastisk utsikt över floder och bergskedjan. Vi har ett all inclusive-spa, restaurang vid sjön, två bastur och tre utomhusbadtunnor. Vi erbjuder också en mängd olika utflyktspaket, inklusive kanotpaddling, kajakpaddling, vandring och forsränning." :"Our resort is over 150 years old, located in the heart of the Alaskan wilderness, we have fantastic views of rivers and the mountain range. We have an all inclusive spa, lakeside restaurant,  two saunas and three outdoor hot tubs. We also offer a variety of outdoor excursion packages, including canoeing, kayaking, hiking, and white water rafting."}

					<div class="box1">
						<form action='/review'>
						    <button type="submit" className={"button"}><b>{this.state.changeLangugae ? "Läs våra reccentioner" : "Read our reviews!"}</b></button>
						</form>

					</div> 
                    <button className={"translate"} onClick={this.handleLanguage} disabled={this.state.changeLangugae} ><b>Översätt</b></button>

                    </span> 
                    <img className="aboutImage" src={aboutImg} alt="aboutImg" />
                </div>
          </div>
        )
    }
}

export default About