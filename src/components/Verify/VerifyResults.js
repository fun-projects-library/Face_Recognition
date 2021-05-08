import React, {useContext} from 'react';
import {VerifyContext} from "../../context/verifyContext"


export default function VerifyResults() {
    const {state} = useContext(VerifyContext);
    // console.log(state)
    return (
        <div>
            <button>Submit</button>
        </div>
    )
}
