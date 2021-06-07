import React, { Component } from 'react'
import {Redirect, NavLink} from "react-router-dom"
import "./NavBar.css"

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            password: "",
            warning: false
        }
        this.LoginFunc = this.LoginFunc.bind(this)
    }
    
    
    LoginFunc (){
        if(this.state.password === "adana" && this.state.loggedIn === false){
            this.setState({
                loggedIn: true,
                password: ""
            })
        } else if(this.state.loggedIn === true){
            this.setState({
                loggedIn: false
            })
        }
    }

    handleChange=(e)=>{
        this.setState({
            password: e.target.value
        })
    }


    render() {
        return (
            <div>
                <nav>

                    {this.state.loggedIn ? 
                    <ul>
                        <li><NavLink to="/" activeClassName="activeNavLink" exact strict>Home</NavLink></li>
                        <li><NavLink to="/detectFace" activeClassName="activeNavLink">Detect Face</NavLink></li>
                        <li><NavLink to="/verify" activeClassName="activeNavLink">Verify</NavLink></li>
                        {/* <li><NavLink to="/error" activeClassName="activeNavLink">Error</NavLink></li> */}
                        
                    </ul> : <Redirect to="/"/>}


                    <div id="loginDiv">
                        <input type="password" placeholder="Already entered for testing!" id="loginInput" onChange={this.handleChange} value={this.state.password} onKeyUp={(e)=> {return e.key === "Enter" && this.state.loggedIn === false ? this.LoginFunc() : ""}}></input>    
                        <button type="button" id="loginBtn" onClick={this.LoginFunc}>{this.state.loggedIn ? "Logout" : "Login"}</button>
                    </div>
                    

                </nav>   
            </div>
        )
    }
}
