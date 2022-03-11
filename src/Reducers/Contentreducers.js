const initialstate={
    name:'',
    email:'',
    address:'',
    city:'',
    country:'',
    phonenumber:''
}

const senddata =(state=initialstate, action)=>{
    if(action.type == 'passdata'){
        console.log({...state},"state");
        return{
            ...state,
            name:action.payload.name,
            email: action.payload.email,
            streetAddress: action.payload.streetAddress,
            city: action.payload.city,
            country: action.payload.country,
            phonenumber: action.payload.phonenumber
        }
    }
    else{
        return state
    }
}

export default senddata;