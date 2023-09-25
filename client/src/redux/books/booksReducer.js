import { ADDED, DELETED, EDITED, LOADED } from './actions';

// initial state
const initialState = [];

// generate new id
const newId = (state) =>
	state.reduce((maxId, curr) => Math.max(maxId, curr.id), 1) + 1;

export default function booksReducer(state = initialState, action) {
	switch (action.type) {
		case LOADED:
			return action.payload;

		case ADDED:
			return [
				...state,
				{
					id: newId(state),
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
