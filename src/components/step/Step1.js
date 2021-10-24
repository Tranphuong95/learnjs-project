import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { mergeData } from "../actions/step";
const Step1 =(props)=>{
    // const {setName, setEmail,setPhoneNumber, name, email, phone}=props;
    const history=useHistory();
    const dispatch=useDispatch();
    useSelector((state)=>console.log("state:", state))
    const {name, email, phone}=useSelector((state)=>state.step);
    // const [name, setName]=useState('');
    // const [email, setEmail]=useState('');
    // const [phone, setPhoneNumber]=useState(null);
    const {onNextStep, onPrevStep}=props;

    const handleOnChange=(name, value)=>{
        // if(name==="name") setName(value);
        // if(name==="email") setEmail(value);
        // if(name==="phone") setPhoneNumber(value);
        dispatch(mergeData({type: name, [name]:value}));

    }
    const onChangePath=(e)=>{
        // e.preventDefault()
        history.push("/step-2");
    }
    console.log("step1:", name, email,phone )
    return (
        // <form>
        <>
            <input type="text" name="name" value={name} onChange={(e)=>handleOnChange("name", e.target.value)}/>
            <input type="text" name="email" value={email} onChange={(e)=>handleOnChange("email", e.target.value)}/>
            <input type="number" name="phone" value={phone} onChange={(e)=>handleOnChange("phone", e.target.value)}/>
            {/* <button type="button" onClick={onNextStep}>Di toi buoc tiep theo</button> */}
            <button type="button" onClick={onChangePath}>Next</button>
        {/* </form> */}
        </>
    )
}
export default Step1