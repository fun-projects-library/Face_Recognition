import React, { Component } from 'react'
import {Redirect, NavLink} from "react-router-dom"
import "./NavBar.css"

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
        this.LoginFunc = this.LoginFunc.bind(this)
    }
    
    
    LoginFunc (){
        this.setState({loggedIn: !this.state.loggedIn})
    }


    render() {
        return (
            <div>
                <nav>

                    {this.state.loggedIn ? 
                    <ul>
                        <li><NavLink to="/" activeClassName="activeNavLink" exact strict>Home</NavLink></li>
                        <li><NavLink to="/detectFace" activeClassName="activeNavLink">Detect Face</NavLink></li>
                        
                        
                    </ul> : <Redirect to="/"/>}

                    <button type="button" id="loginBtn" onClick={this.LoginFunc}>{this.state.loggedIn ? "Logout" : "Login"}</button>

                </nav>   
            </div>
        )
    }
}
