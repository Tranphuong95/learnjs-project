import React from "react";
class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number: 30
        }
    }
    componentDidMount=()=>{
        this.dn=setTimeout(()=>{
            this.setState({number: this.state.number-1})
            },[1000])
            if(this.state.number===0) clearTimeout(this.dn)
    }
    componentWillReceiveProps=(nextProps)=>{
        console.log("willRecei:", nextProps)
        // const dn=setTimeout(()=>{
        //     this.setState({number:--this.state.number})
        // },[1000])
        // if(this.state.number===0) clearTimeout(dn)
    }
    componentWillUpdate=(props, state)=>{
        console.log("class:", props, this.state.number, state.number);
        // const dn=setTimeout(()=>{
        //         this.setState({number: state.number-1})
        //     },[1000])
        //     if(state.number===0) clearTimeout(dn)
        
    }
    componentDidUpdate=(props, state)=>{
       console.log(state, this.state)
       const dn=setTimeout(()=>{
        this.setState({number: state.number-1})
    },[1000])
    if(state.number===0) clearTimeout(dn)
       
    }
    componentWillUnmount=()=>{
        clearTimeout(this.dn)
    }
    handleNumber=()=>{
        this.setState({
            number: this.state.number +1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleNumber}>Increatment</button>
                <h1>{this.state.number}</h1>
            </div>
        )
    }
}
export default ClassComponent;