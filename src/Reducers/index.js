import {combineReducers} from 'redux'
import senddata from './Contentreducers'
import workexpred from './workexpreducer';
import edureducer from './Educationreducer';
import skillred from './Skillreducer';
import summred from './Summaryreducer';
import finalReducer from './FinalPageReducer'
import userRed from './UserReducer'

const rootreducer = combineReducers({
    senddata, workexpred, edureducer, skillred, summred, finalReducer,userRed
})

export default rootreducer;