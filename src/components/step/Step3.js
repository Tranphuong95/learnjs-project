import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { mergeData } from "../actions/step";
const Step3=(props)=>{
    // const [checkBox, setCheckBox]=useState(false);
    const {onNextStep, onPrevStep}=props;
    const {checkBox}=useSelector((state)=>state.step);
    const dispatch=useDispatch();
    const history=useHistory()

    const handleChange=(name, value)=>{
        // setCheckBox(e.target.value)
        dispatch(mergeData({type: name, [name]:value}));
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit step3 success!')
    }
    const onGoBack=(e)=>{
        // e.preventDefault();
        history.goBack()
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="checkbox" value={checkBox} onChange={(e)=>handleChange("checkBox", e.target.value)}/>
            {/* <button type="button" onClick={onPrevStep}>Quay lai buoc truoc</button> */}
            <button type="button" onClick={onGoBack}>Goback</button>
            <button type="submit">Gui form</button>
        </form>
        </>
    )
}
export default Step3