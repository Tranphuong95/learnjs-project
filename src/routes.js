import { findProps } from "devextreme-react/core/template";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Step1 from "./components/step/Step1";
import Step2 from "./components/step/Step2";
import Step3 from "./components/step/Step3";
const Routes=(props)=>{
    console.log("routeprops",props)

    return (
        <Switch>
            <Route path="/step-1"><Step1 onNextStep={props.onNextStep} onPrevStep={props.onPrevStep}/></Route>
            <Route path="/step-2"><Step2 onNextStep={props.onNextStep} onPrevStep={props.onPrevStep}/></Route>
            <Route path="/step-3"><Step3 onNextStep={props.onNextStep} onPrevStep={props.onPrevStep}/></Route>
        </Switch>
    )
}
export default Routes;