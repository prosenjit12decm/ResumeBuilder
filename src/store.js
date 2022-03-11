import {createStore} from 'redux';
import rootreducer from './Reducers';


const store = createStore(rootreducer);
export default store;