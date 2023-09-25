import { edited } from '../actionCreators';

export default function editBook(bookDetails, id) {
	return async function (dispatch) {
		const response = await fetch(`http://localhost:9000/books/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(bookDetails),
		});

		const todo = await response.json();

		dispatch(edited(todo));
	};
}
