
import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import LoadingReducer from './LoadingReducer';
import requestSentsuccesReducer from './requestSentsuccesReducer';
import profileReducers from './profile.reducers';
import UserStatistiquesReducers from './UserStatistiques.reducers';
import binsStatistiquesReducers from './binsStatistiques.reducers';
import requestsMunicipal from './requestsMunicipal';
import AllUsersReducers from './AllUsers.reducers';
import UserDetailsReducer from './userDetails.reducers';
export default combineReducers({
    auth:authReducer,
    error:errorReducer,
    isLoading: LoadingReducer,
    success:requestSentsuccesReducer,
    profile: profileReducers,
    userStatistiques: UserStatistiquesReducers,
    binStatistiques : binsStatistiquesReducers,
    MunicipaRequest : requestsMunicipal,
    users: AllUsersReducers,
    UsersDetails: UserDetailsReducer
    
})