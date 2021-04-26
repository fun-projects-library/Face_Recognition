import React, { useState} from 'react'
import axios from "axios";
import "./Results.css"

export default function Results(props) {
    const {result, setresult} = useState(props.url)

    const options = {
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
    
    // https://inferdo.com/img/face-3.jpg


    return (
        <div>
            <div id="resultDiv">
                <img src={props.url}></img>
                
            </div>
            

        </div>
    )
}
