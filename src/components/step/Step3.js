import React, { useState } from "react";
const Step3=(props)=>{
    const [checkBox, setCheckBox]=useState(false);
    const {onNextStep, onPrevStep}=props;

    const handleChange=(e)=>{
        setCheckBox(e.target.value)
    }
    const onSubmit=()=>{
        console.log('Submit step3 success!')
    }
    return(
        <form onSubmit={onSubmit}>
            <input type="checkBox" value={checkBox} onChange={(e)=>handleChange(e)}/>
            <button type="button" onClick={onPrevStep}>Quay lai buoc truoc</button>
            <button type="submit">Gui form</button>
        </form>
    )
}
export default Step3