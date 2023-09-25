import { loaded } from '../books/actionCreators';

export default async function loadBooks(dispatch, getState) {
	const res = await fetch('http://localhost:9000/books');

	const books = await res.json();

	dispatch(loaded(books));
}
