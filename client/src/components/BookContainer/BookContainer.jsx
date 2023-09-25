import { useDispatch, useSelector } from 'react-redux';
import Book from '../Book/Book';
import { useEffect } from 'react';
import loadBooks from '../../redux/thunk/loadBooks';

export default function BookContainer({ showAllBooks }) {
	// ! Required hooks and variables
	const books = useSelector((state) => state);
	const dispatch = useDispatch();

	// Load book for first time
	useEffect(() => {
		dispatch(loadBooks);
	}, []);

	return (
		<div className='lws-bookContainer'>
			{/* <!-- Book Cards  --> */}
			{showAllBooks && books
				? books.map((book) => <Book key={book.id} book={book} />)
				: books
						.filter((book) => book.featured !== showAllBooks)
						.map((book) => <Book key={book.id} book={book} />)}
		</div>
	);
}
