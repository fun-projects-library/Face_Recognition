import React, { Component } from 'react'
import Results from "../Results/Results"
import axios from "axios";
import "./Form.css"


export default class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       url: "",
       submitted: false,
       infos: []
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

  seeResults = () => {
    const options = {
      method: 'POST',
      url: 'https://microsoft-face1.p.rapidapi.com/detect',
      params: {
        returnFaceId: 'true',
        recognitionModel: 'recognition_01',
        detectionModel: 'detection_01',
        returnFaceAttributes: 'age,gender,emotion,smile'
      },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': 'f7b90963eamshf47dc9bcd5e7ff5p1b0d21jsna5168b2db105',
        'x-rapidapi-host': 'microsoft-face1.p.rapidapi.com'
      },
      data: {url: this.state.url}
  };
    
  axios.request(options)
  .then(response => {
    this.setState({infos: response.data, submitted: true})
  })
  .catch(function (error) {
      console.error(error);
  });

  // this.handleSubmit()

  }

  render() {
    // console.log(this.state.infos)
      return (
          <div>
            {!this.state.submitted ? 
            <form>
            <input type="text" placeholder="enter your URL" name="URL" onChange={this.handleChange}/>
            <button type="button" id="resultBtn" onClick={this.seeResults}>See results!</button>
          </form> : ""
          }
              
              {this.state.submitted ? <Results url={this.state.url} infos={this.state.infos}/> : ""}
          </div>
      )
  }
}
