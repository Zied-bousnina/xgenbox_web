
import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import LoadingReducer from './LoadingReducer';
import requestSentsuccesReducer from './requestSentsuccesReducer';
import profileReducers from './profile.reducers';
export default combineReducers({
    auth:authReducer,
    error:errorReducer,
    isLoading: LoadingReducer,
    success:requestSentsuccesReducer,
    profile: profileReducers,
    
})