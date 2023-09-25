import { ADDED, DELETED, EDITED, LOADED } from './actions';

// initial state
const initialState = [];

export default function booksReducer(state = initialState, action) {
	switch (action.type) {
		case LOADED:
			return action.payload;

		case ADDED:
			return [
				...state,
				{
					...action.payload,
				},
			];

		case EDITED:
			return [
				...state.filter((book) => book.id !== action.payload.id),
				{
					...action.payload,
				},
			];

		case DELETED:
			return state.filter((book) => book.id !== action.payload.id);

		default:
			break;
	}
}
