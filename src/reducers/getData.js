import data from '../data.json';

const initialState = '';
const getName = (state = initialState, action)=>{
    // window.alert(JSON.stringify(action.payload));
    return action.payload;
}

export default getName;