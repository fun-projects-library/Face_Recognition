import React, { Component } from 'react'
import "./NavBar.css"

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
        this.LoginFunc = this.LoginFunc.bind(this)
    }
    LoginFunc(){
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                    </ul>
                    <button type="button" id="loginBtn" onClick={this.LoginFunc}>{this.state.loggedIn ? "Logout" : "Login"}</button>
                </nav>
            </div>
        )
    }
}
