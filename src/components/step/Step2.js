import React, { useState } from "react";
import { useHistory } from "react-router";
const Step2 =(props)=>{
    const [values, setValues]=useState({});
    const {onNextStep, onPrevStep}=props;
    const history=useHistory();
    const handleOnChange=(name, value)=>{
        setValues({...values, [name]:value})
    }
    const onGoBack=(e)=>{
        e.preventDefault();
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
    return (
        <form>
            <input type="number" name="age" value={values.age} onChange={(e)=>handleOnChange("name", e.target.value)}/>
            <input type="text" name="addrees" value={values.address} onChange={(e)=>handleOnChange("email", e.target.value)}/>
            <button type="button" onClick={onNext}>Di toi buoc tiep theo</button>
            <button type="button" onClick={onBack}>Quay lai buoc truoc</button>
            {/* <button type="button" onClick={onGoBack}>Goback</button> */}
        </form>
    )
}
export default Step2