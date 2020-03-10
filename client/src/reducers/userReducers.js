import { getActionStates } from '../Utils/reduxUtility';
import { USER_LIST, RESUME_LIST, DELETE } from '../actions/userActions';
import { successState, loadingState, errorState } from './defaultState';

export function getUserCountResponse(state = {}, action) {
	switch (action.type) {
		case getActionStates(USER_LIST).success:
			return { ...successState, data: action.data };
		case getActionStates(USER_LIST).inProgress:
			return { ...loadingState, loading: action.loading };
		case getActionStates(USER_LIST).failure:
			return { ...errorState, error: action.error };
		default:
			return state;
	}
}

export function getResumeListResponse(state = {}, action) {
	switch (action.type) {
		case getActionStates(RESUME_LIST).success:
			return { ...successState, data: action.data };
		case getActionStates(RESUME_LIST).inProgress:
			return { ...loadingState, loading: action.loading };
		case getActionStates(RESUME_LIST).failure:
			return { ...errorState, error: action.error };
		default:
			return state;
	}
}

export function getResumeDeleteResponse(state = {}, action) {
	switch (action.type) {
		case getActionStates(DELETE).success:
			return { ...successState, data: action.data };
		case getActionStates(DELETE).inProgress:
			return { ...loadingState, loading: action.loading };
		case getActionStates(DELETE).failure:
			return { ...errorState, error: action.error };
		default:
			return state;
	}
}
