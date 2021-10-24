export const mergeData=(payload)=>(dispatch)=>{
    console.log(payload)
    try {
        dispatch({type: payload.type, payload})    
    } catch (error) {
        console.log(error)
    }
}