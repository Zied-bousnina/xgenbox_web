
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
import PartnerShipListReducer from './PartnerShipList.reducer';
import PartnerDetaisReducer from './PartnerDetais.reducer';
import QuotefetchAllReducers from './QuotefetchAll.reducers';
import quoteDetailsReducers from './quoteDetails.reducers';
import TechAssistListReducer from './TechAssistList.reducer';
import TechAssistDetailsReducer from './TechAssistDetails.reducer';
import ContactListReducers from './ContactList.reducers';
import ContactDetailsReducer from './ContactDetails.reducer';
import ListOfBinsReducers from './ListOfBins.reducers';
import BinsNotInPointBinReducers from './BinsNotInPointBin.reducers';
import ListPointBinsReducer from './ListPointBins.reducer';
import binDetailsReducers from './binDetails.reducers';
import PointBinsDetailsReducer from './PointBinsDetails.reducer';
import AllBinsReducer from './AllBins.reducer';
import AllPointBinsReducer from './AllPointBins.reducer';
import MunicipalDetailsReducer from './MunicipalDetails.reducer';
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
    UsersDetails: UserDetailsReducer,
    partnerShipList: PartnerShipListReducer,
    partnerDetails: PartnerDetaisReducer,
    quote: QuotefetchAllReducers,
    quoteDetails: quoteDetailsReducers,
    TechAssistList : TechAssistListReducer,
    TechAssistDetails : TechAssistDetailsReducer,
    contactList : ContactListReducers,
    ContactDetails : ContactDetailsReducer,
    ListOfBins : ListOfBinsReducers,
    ListOfBinsNotInPointBin : BinsNotInPointBinReducers,
    ListOfPointBins : ListPointBinsReducer,
    binDetails : binDetailsReducers,
    PointBinDetails : PointBinsDetailsReducer,
    allBins : AllBinsReducer,
    AllPointBins : AllPointBinsReducer,
    MunicipalDetails : MunicipalDetailsReducer
    
})