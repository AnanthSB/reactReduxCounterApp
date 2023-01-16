const initialState = 0;

//Here changeNumber is a reducer function 
const changeNumber = (state = initialState, action)=>{
    switch(action.type){
        case 'increment':
            return state += action.payload
        case 'decrement':
            return state -= action.payload;
        default:
            return state;
    }
}

export default changeNumber;