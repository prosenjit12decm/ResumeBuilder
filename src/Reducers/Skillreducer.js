const initialstate = {
    skillf:'',
    skillse:'',
    skillt:'',
    skillfo:'',
    skillfi:'',
    skillsi:''
}


const skillred= (state = initialstate, action)=>{
    if(action.type == 'skill'){
        return{
            skillf: action.payload.skillf,
            skillse: action.payload.skillse,
            skillt: action.payload.skillt,
            skillfo: action.payload.skillfo,
            skillfi: action.payload.skillfi,
            skillsi: action.payload.skillsi
        }
    }
    else{
        return state
    }
}

export default skillred;