const inistate = {
    profsummary: ''
}

const summred =( state=inistate, action)=>{
    if(action.type == 'summaction'){
        return{
            profsummary: action.payload.profsummary
        }
    }
    else{
        return state
    }
}

export default summred;