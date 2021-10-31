export const mergeData=(payload)=>(dispatch)=>{
    try {
        dispatch({type: payload.type, payload})    
    } catch (error) {
        console.log(error)
    }
}