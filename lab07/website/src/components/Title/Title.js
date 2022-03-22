import React, { Component } from 'react'; 
import './Title.css'

class Title extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
                <div className="title-page">
                    <p class="title-text">Windsor Resort</p>
                    <span class="subtitle">YOUR ADVENTURE AWAITS</span>
                </div>
        )
    }
}

export default Title