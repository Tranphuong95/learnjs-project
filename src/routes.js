import { findProps } from "devextreme-react/core/template";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Step1 from "./components/step/Step1";
import Step2 from "./components/step/Step2";
import Step3 from "./components/step/Step3";
import ElasticSearch from "./components/ElasticSearch"
const Routes=(props)=>{
    console.log("routeprops",props)

    return (
        <Switch>
            {/* <Route exact path="/step-1"><Step1 onNextStep={props.onNextStep} onPrevStep={props.onPrevStep}/></Route>
            <Route exact path="/step-2"><Step2 onNextStep={props.onNextStep} onPrevStep={props.onPrevStep}/></Route>
            <Route exact path="/step-3"><Step3 onNextStep={props.onNextStep} onPrevStep={props.onPrevStep}/></Route> */}
            <Route exact path="/search"><ElasticSearch/></Route>
            <Route exact path="/"><App/></Route>
        </Switch>
    )
}
export default Routes;