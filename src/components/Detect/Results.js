import React, { Component } from 'react'
import "./Results.css"

export default class Results extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            infos: []
        }
    }
    

    componentDidMount(){
        this.setState({infos: this.props.infos})
    }
    // componentDidUpdate(){
    //     console.log(this.state.infos)
    // }

    render() {
        console.log(this.state.infos)
        return (
            
            
            <div id="container">
                <img src={this.props.url} alt="personalImage" id="uploadIMG"></img>
                <div id="resultDiv">
                    {this.state.infos.map((person,index)=>{
                        return (
                            <div key={index}>
                                <p><u style={{color: "red"}}>{person.faceAttributes.gender.charAt(0).toUpperCase()+person.faceAttributes.gender.slice(1)}</u> <small>({person.faceRectangle.top}px from top, {person.faceRectangle.left}px from left)</small></p>
                                <p>You could be "{person.faceAttributes.age - 4}" but to be honest you look like way younger than that :)</p>
                                <p>{person.faceAttributes.smile !== 0 ? "I see some smile on your face. That's great" : ""}</p>
                                <ul style={{marginLeft: "0", textAlign:"center"}}>
                                    <li><u>Anger</u> {person.faceAttributes.emotion.anger}</li>
                                    <li><u>Happiness</u> {person.faceAttributes.emotion.happiness}</li>
                                    <li><u>Contempt</u> {person.faceAttributes.emotion.contempt}</li>
                                    <li><u>Neutral</u> {person.faceAttributes.emotion.neutral}</li>
                                    <li><u>Fear</u> {person.faceAttributes.emotion.fear}</li>
                                    <li><u>Surprise</u> {person.faceAttributes.emotion.surprise}</li>
                                    <li><u>Sadness</u> {person.faceAttributes.emotion.sadness}</li>
                                    <li><u>Disgust</u> {person.faceAttributes.emotion.disgust}</li>
                                </ul>
                                <br />

                            </div>
                        )
                    })}
                </div>
            </div>
            
        )
    }
}






/* const options = {
        method: 'POST',
        url: 'https://face-detection6.p.rapidapi.com/img/face-age-gender',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-key': 'f7b90963eamshf47dc9bcd5e7ff5p1b0d21jsna5168b2db105',
          'x-rapidapi-host': 'face-detection6.p.rapidapi.com'
        },
        data: {url: props.url, accuracy_boost: 3}
    };


    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

*/