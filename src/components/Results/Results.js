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
                                <p>You could be "{person.faceAttributes.age - 4}" but to be honest you look like way younger than that :)</p>
                                <p>{person.faceAttributes.smile !== 0 ? "I see some smile on your face. That's great" : ""}</p>
                                <p></p>
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