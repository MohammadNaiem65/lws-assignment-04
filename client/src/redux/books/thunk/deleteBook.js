import { deleted } from "../actionCreators";

export default function deleteBook(id) {
	return async function (dispatch) {
		await fetch(`http://localhost:9000/books/${id}`, {
			method: 'DELETE',
		});

		dispatch(deleted(id))
	};
}
