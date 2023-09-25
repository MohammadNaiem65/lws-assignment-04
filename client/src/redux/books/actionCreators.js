import { ADDED, DELETED, EDITED } from './actions';

export const added = (bookDetails) => {
	return {
		type: ADDED,
		payload: bookDetails,
	};
};

export const edited = (bookDetails) => {
	return {
		type: EDITED,
		payload: bookDetails,
	};
};

export const deleted = (id) => {
	return {
		type: DELETED,
		payload: { id },
	};
};
