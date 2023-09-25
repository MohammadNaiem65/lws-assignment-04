import { added } from '../actionCreators';

export default function addBook(bookDetails) {
	return async function (dispatch) {
		const response = await fetch('http://localhost:9000/books', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(bookDetails),
		});

		const todo = await response.json();

		dispatch(added(todo));
	};
}
