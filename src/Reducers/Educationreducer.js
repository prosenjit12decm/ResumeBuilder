const initialstate ={
    schoolname: '',
    city: '',
    country: '',
    degree :'',
    gradutaiondate: ''
}


const edureducer= (state= initialstate, action)=>{
    if(action.type == "eddata"){
        return{
            ...state,
            schoolname : action.payload.schoolname,
            city : action.payload.city,
            country : action.payload.country,
            degree : action.payload.degree,
            gradutaiondate : action.payload.gradutaiondate
        }
    }
    else{
        return state
    }
}

export default edureducer;