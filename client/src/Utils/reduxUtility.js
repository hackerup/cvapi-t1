export function getActionStates(actionName) {
	if (typeof actionName !== 'string') {
		throw new Error('actionName must be a string');
	}
	const actionNameUpper = actionName.toUpperCase();
	const inProgress = `FETCHING_${actionNameUpper}`;
	const success = `FETCH_${actionNameUpper}_SUCCESS`;
	const failure = `FETCH_${actionNameUpper}_ERRORED`;
	const clear = `CLEAR_${actionNameUpper}`;

	return {
		inProgress,
		success,
		failure,
		clear,
	};
}
