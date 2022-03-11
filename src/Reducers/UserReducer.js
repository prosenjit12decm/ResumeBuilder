const initialstate ={
    uid:'',
    email:''
}

const userRed = (state = initialstate, action)=>{
    if(action.type == 'userForm'){
        return action.payload
    }
    else{
        return state
    }
}

export default userRed;