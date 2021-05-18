import React, { useReducer } from 'react';
import "./Verify.css"
import {VerifyContext} from "../../context/verifyContext";
import axios from "axios";
import VerifyResults from "./VerifyResults";
import myImage from "./image.jpg"



const initialState = {submitButton: false, faceId1: "", faceId2:"", faceId1URL:"", faceId2URL:""}

const reducer = (state, action) => {
    switch (action.type) {
        case "faceId1Button": return {...state, faceId1: action.payload};
        case "faceId1URL": return {...state, faceId1URL: action.payload};

        case "faceId2Button": return {...state, faceId2: action.payload};
        case "faceId2URL": return {...state, faceId2URL: action.payload};

        case "submitButton": return {...state, submitButton: action.payload};
            
    
        default:
            return state
    }
}

export default function Verify(e) {

    // const [state, setState] = useState({submitButton: false});
    const [state, dispatch] = useReducer(reducer, initialState) 

    const detectFunc = (e) => {
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
          // dispatch({...state, [e.target.id === "faceId1Button" ? "faceId1" : "faceId2"]: response.data[0].faceId});
          dispatch({type: e.target.id, payload: response.data[0].faceId})
        })
        .then(()=>{
            if(e.target.id === "faceId2Button"){
                dispatch({type: "submitButton", payload: true})
            }
        })
        .catch(function (error) {
            console.error(error);
        });
        

    }

    const handleInput = (e) => {
        
        dispatch({type: e.target.id, payload: e.target.value})
    }
    // console.log(state.faceId1 ? state.faceId1[0].faceId : "sss");
    

    console.log(state)
    return (
        <VerifyContext.Provider value={{state}}>
            <div id="verifyDiv">
                <div id="pictureOne" className="pictureClass">
                    <div className="imageDiv">
                        <img src={state.faceId1URL ? state.faceId1URL : myImage} alt="pictureOne" className="uploadImages"></img>
                    </div>
                    
                    
                    <input type="text" onChange={handleInput} id="faceId1URL" value={state.faceId1URL}/>
                    <button onClick={detectFunc} id="faceId1Button" type="button" className="uploadButtons">Upload</button>
                </div>
                
                <div>
                    {state.submitButton ? <VerifyResults /> : ""}
                </div>
                

                <div id="pictureTwo" className="pictureClass">
                    <div className="imageDiv">
                        <img src={state.faceId2URL ? state.faceId2URL : myImage} alt="pictureOne" className="uploadImages"></img>
                    </div>
                    
                    
                    <input type="text" id="faceId2URL" onChange={handleInput} value={state.faceId2URL}/>
                    <button onClick={detectFunc} id="faceId2Button" type="button" className="uploadButtons">Upload</button>
                </div>
                
                
                
            </div>
            
        </VerifyContext.Provider>
    )
}
