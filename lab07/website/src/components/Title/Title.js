import React, { Component } from 'react'; 
import './Title.css'

class Title extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
            <div className="title">
                <div className="title-page">
                <span class="title-text">Windsor Resort</span>
                <span class="subtitle">YOUR ADVENTURE AWAITS</span>
            </div>
          </div>
        )
    }
}

export default Title