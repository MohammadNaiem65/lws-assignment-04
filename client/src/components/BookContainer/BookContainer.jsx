import { useDispatch, useSelector } from 'react-redux';
import Book from '../Book/Book';
import { useEffect } from 'react';
import loadBooks from '../../redux/books/thunk/loadBooks';

export default function BookContainer({
	showAllBooks,
	searchedBook,
	setDefaultValue,
}) {
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
			{searchedBook
				? books
						?.filter((book) =>
							book.name
								.toLowerCase()
								.includes(searchedBook.toLowerCase())
						)
						.map((book) => (
							<Book
								key={book.id}
								book={book}
								setDefaultValue={setDefaultValue}
							/>
						))
				: showAllBooks
				? books?.map((book) => (
						<Book
							key={book.id}
							book={book}
							setDefaultValue={setDefaultValue}
						/>
				  ))
				: books
						?.filter((book) => book.featured !== showAllBooks)
						.map((book) => (
							<Book
								key={book.id}
								book={book}
								setDefaultValue={setDefaultValue}
							/>
						))}
		</div>
	);
}
