const initialstate = {
    document: {
        color: 1,
        fsize: 1,
        fweight: 1
    }
}

const finalReducer = (state = initialstate, action)=>{
    if(action.type == "DocumentStyleChnage"){
        return{
            ...state,
            document : action.payload
        }
    }
    else{
        return state
    }
}

export default finalReducer;