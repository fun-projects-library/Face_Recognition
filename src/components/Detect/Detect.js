import React, { Component } from 'react'
import Results from "./Results"
import axios from "axios";
import "./Detect.css"


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
      url: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?',
      params: {
        returnFaceId: 'true',
        recognitionModel: 'recognition_01',
        detectionModel: 'detection_01',
        returnFaceAttributes: 'age,gender,emotion,smile'
      },
      headers: {
        'content-type': 'application/json',
        'Ocp-Apim-Subscription-Key': '398a9c1ab8b046169f5397e6e99d35e5',
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

          {this.state.submitted ? <button onClick={()=> {this.setState({submitted: false})}} id="tryButton">Try Another!</button> : ""}

            {this.state.submitted ? <Results url={this.state.url} infos={this.state.infos}/> : ""}
          </div>
      )
  }
}
