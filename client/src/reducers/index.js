import { combineReducers } from 'redux';
import { getUserCountResponse, getResumeListResponse, getResumeDeleteResponse } from './userReducers';

const rootReducers = combineReducers({
	getUserCountResponse,
	getResumeListResponse,
	getResumeDeleteResponse
})
export default rootReducers;