import React, { Component } from 'react'; 
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import logo from '../../images/logo.png'

class Navbar extends Component { 
    state = { clicked:false }
    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return(
            <nav className="NavbarItems">
                  <img src={logo} width="150" height="150" alt="logo" class="me-6 align-self-center"></img>
                <h1 className="navbar-logo"> 
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':
                'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key ={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar