import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { mergeData } from "../actions/step";
const Step2 =(props)=>{
    const [values, setValues]=useState({});
    const {onNextStep, onPrevStep}=props;
    const history=useHistory();
    const dispatch=useDispatch();
    const {age, address}=useSelector((state)=>state.step);
    const handleOnChange=(name, value)=>{
        // setValues({...values, [name]:value})
        dispatch(mergeData({type: name, [name]:value}));

    }
    const onGoBack=(e)=>{
        // e.preventDefault();
        history.goBack()
    }
    const onNext=(e)=>{
        e.preventDefault();
        onNextStep()
    }
    const onBack=(e)=>{
        e.preventDefault();
        onPrevStep()
    }
    const onChangePath=(e)=>{
        // e.preventDefault()
        history.push("/step-3");
    }
    return (
        // <form>
        <>
            <input type="number" name="age" value={age} onChange={(e)=>handleOnChange("age", e.target.value)}/>
            <input type="text" name="address" value={address} onChange={(e)=>handleOnChange("address", e.target.value)}/>
            {/* <button type="button" onClick={onNext}>Di toi buoc tiep theo</button> */}
            {/* <button type="button" onClick={onBack}>Quay lai buoc truoc</button> */}
            <button type="button" onClick={onGoBack}>Goback</button>
            <button type="button" onClick={onChangePath}>Next</button>
        {/* </form> */}
        </>
    )
}
export default Step2