import React, {useContext, useReducer} from 'react';
import {VerifyContext} from "../../context/verifyContext"
import axios from "axios"
import "./VerifyResults.css"

const initialState = {
    isIdentical: "",
    confidence: "",
    showResult: false
}
const reducer = (verifyState, action) => {
    switch (action.type){
        case "seeResult": return {...verifyState, isIdentical: action.payload.isIdentical, confidence: action.payload.confidence};
        case "showResult" : return{...verifyState, showResult: action.payload}

        default:
            return verifyState;
    }
}



export default function VerifyResults() {
    const {state} = useContext(VerifyContext);

    const [verifyState, dispatch] = useReducer(reducer, initialState)

    const verifyFunc = () => {
        const options = {
            method: 'POST',
            url: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/verify?',
            params: {},
            headers: {
              'content-type': 'application/json',
              'Ocp-Apim-Subscription-Key': '398a9c1ab8b046169f5397e6e99d35e5',
            },
            data: {
                faceId1: state.faceId1,
                faceId2: state.faceId2,
            }
        };
          


        axios.request(options)
        .then(response => {
            
            dispatch({type: "seeResult", payload: response.data})
        })
        .then(()=>{
            dispatch({type:"showResult", payload: true})
        })
        .catch(function (error) {
            console.error(error);
        });
    }


    console.log(verifyState)
    return (
        <div id="verifyResultsDiv">
            <button onClick={verifyFunc} id="submitButton">Submit</button>
            {verifyState.showResult ? 
            <div>
                <input type="text" id="verifyInput" defaultValue={verifyState.isIdentical ? "It s you!!!" : "Opps, it s a different person"}></input>
                <br />
                <span>The confidence rate: {verifyState.confidence}</span>
            </div> : ""
        }
        </div>
    )
}
