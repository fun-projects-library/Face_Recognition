import React, { useState } from 'react';
import "./Verify.css"
import {VerifyContext} from "../../context/verifyContext";
import axios from "axios";
import VerifyResults from "./VerifyResults"

export default function Verify(e) {

    const [state, setState] = useState({submitButton: false}) 

    const verifyFunc = (e) => {
        // console.log(e.target.id)
        const options = {
            method: 'POST',
            url: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?',
            params: {
              returnFaceId: 'true',
            },
            headers: {
              'content-type': 'application/json',
              'Ocp-Apim-Subscription-Key': '398a9c1ab8b046169f5397e6e99d35e5',
            },
            data: {url: e.target.id === "faceId1Button" ? state.faceId1URL : state.faceId2URL}
        };
          
        axios.request(options)
        .then(response => {
          setState({...state, [e.target.id === "faceId1Button" ? "faceId1" : "faceId2"]: response.data[0].faceId});
          
        })
        .catch(function (error) {
            console.error(error);
        });

    }
    const handleInput = (e) => {
        setState({...state, [e.target.id]: e.target.value})
    }
    // console.log(state.faceId1 ? state.faceId1[0].faceId : "sss");
    

    console.log(state)
    return (
        <VerifyContext.Provider value={{state}}>
            <div id="verifyDiv">
                <input type="text" onChange={handleInput} id="faceId1URL"/>
                <button onClick={verifyFunc} id="faceId1Button">Upload</button>
                <br />
                <input type="text" id="faceId2URL" onChange={handleInput}/>
                <button onClick={verifyFunc} id="faceId2Button">Upload</button>
                {state.submitButton ? <VerifyResults /> : ""}
            </div>
            
        </VerifyContext.Provider>
    )
}
