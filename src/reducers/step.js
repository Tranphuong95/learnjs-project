import * as Types from './../components/constants/actionTypes';
const initialSate = {
    name: '',
    email: '',
    phone: 0,
    age: 0,
    address: '',
    checkBox: false

}
const stepReducer = (state = initialSate, action) => {
    console.log("action", action,  action.payload && {[action.payload.type]: action.payload[action.payload.type]})
    switch (action.type) {
        // case Types.MERGE_DATA:
        case action.payload && action.payload.type:
            return {...state, [action.payload.type]: action.payload[action.payload.type]}
        default:
            return {...state};
    }
}
export default stepReducer;