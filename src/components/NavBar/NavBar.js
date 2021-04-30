import React, { Component } from 'react'
import {Link, Route} from "react-router-dom"
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/detectFace">Detect Face</Link></li>
                        {this.state.loggedIn ? 
                        <Route path="/" /> : ""    
                    }
                        
                    </ul> : ""}
                    <button type="button" id="loginBtn" onClick={this.LoginFunc}>{this.state.loggedIn ? "Logout" : "Login"}</button>
                </nav>
                  
            </div>
        )
    }
}
