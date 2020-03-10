import { getActionStates } from '../Utils/reduxUtility';
import axios from 'axios';

export const USER_LIST = 'USER_LIST';
export const RESUME_LIST = 'RESUMES_LISt';

export const DELETE = 'DELETE';

const apiRequest = (dispatch, params, url, requestType, successActions, loadingActions, errorActions) => {
	let headers = { 'Content-Type': 'application/json' };
	let defaultUrl = '';
	if (process.env.NODE_ENV == 'development') {
		defaultUrl = 'http://localhost:5000';
	}

	let reqObj = { method: requestType, url: defaultUrl + url, data: JSON.stringify(params), headers };

	if (dispatch && loadingActions) dispatch(loadingActions(true));

	axios(reqObj)
		.then(res => {
			if (dispatch && loadingActions) dispatch(loadingActions(false));

			if (dispatch && successActions) dispatch(successActions(res.data));
		})
		.catch(error => {
			console.log(error);
			if (dispatch && errorActions) dispatch(errorActions(error.response));
		});
};
export const getUsersCountSuccess = data => {
	return { type: getActionStates(USER_LIST).success, data };
};

export const getUsersCountErrored = error => {
	return { type: getActionStates(USER_LIST).failure, error };
};

export const getUsersCountLoading = loading => {
	return { type: getActionStates(USER_LIST).inProgress, loading };
};

export const getUserCount = params => {
	const url = '/api/users';
	const requestType = 'GET';
	return dispatch => apiRequest(dispatch, params, url, requestType, getUsersCountSuccess, getUsersCountLoading, getUsersCountErrored);
};

export const getResumesSuccess = data => {
	return { type: getActionStates(RESUME_LIST).success, data };
};

export const getResumesErrored = error => {
	return { type: getActionStates(RESUME_LIST).failure, error };
};

export const getResumesLoading = loading => {
	return { type: getActionStates(RESUME_LIST).inProgress, loading };
};

export const getResumeList = params => {
	const url = '/api/cvs';
	const requestType = 'GET';
	return dispatch => apiRequest(dispatch, params, url, requestType, getResumesSuccess, getResumesLoading, getResumesErrored);
};

export const getResumeDeleteSuccess = data => {
	return { type: getActionStates(DELETE).success, data };
};

export const getResumeDeleteErrored = error => {
	return { type: getActionStates(DELETE).failure, error };
};

export const getResumeDeleteLoading = loading => {
	return { type: getActionStates(DELETE).inProgress, loading };
};

export const getResumeDelete = params => {
	const url = '/api/cv';
	const requestType = 'DELETE';
	return dispatch => apiRequest(dispatch, params, url, requestType, getResumeDeleteSuccess, getResumeDeleteLoading, getResumeDeleteErrored);
};