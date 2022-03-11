const initialstate = {
    jobtitle:'',
    company:'',
    city:'',
    country:'',
    startdate:'',
    enddate:'',
    description:''
}

const workexpred =(state=initialstate, action)=>{
    if(action.type == 'data'){
        return{
            ...state,
            jobtitle : action.payload.jobtitle,
            company : action.payload.company,
            city : action.payload.city,
            country : action.payload.country,
            startdate : action.payload.startdate,
            enddate : action.payload.enddate,
            description : action.payload.description
        }
    }
    else{
        return state;
    }
}

export default workexpred;

