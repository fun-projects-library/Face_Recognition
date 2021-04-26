import React, { Component } from 'react'
import Results from "../Results/Results"

import "./Form.css"


export default class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       url: "",
       submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  


  componentDidMount(){
    
  }
  
  handleChange(e){
    this.setState({
      url: e.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      submitted: true
    })
  }

  render() {
      return (
          <div>
            {!this.state.submitted ? 
            <form>
            <input type="text" placeholder="enter your URL" name="URL" onChange={this.handleChange}/>
            <button type="button" id="resultBtn" onClick={this.handleSubmit}>See results!</button>
          </form> : ""
          }
              
              {this.state.submitted ? <Results url={this.state.url}/> : ""}
          </div>
      )
  }
}
