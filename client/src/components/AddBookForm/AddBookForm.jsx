import { useDispatch } from 'react-redux';
import addBook from '../../redux/books/thunk/addBook';

export default function AddBookForm() {
	// ! Required hooks, functions and variables
	const dispatch = useDispatch();

	const handleAddBook = (e) => {
		e.preventDefault();
		const form = e.target;

		const name = form.name.value;
		const author = form.author.value;
		const thumbnail = form.thumbnail.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const featured = form.featured.checked;

		const bookDetails = {
			name,
			author,
			thumbnail,
			price,
			rating,
			featured,
		};

		dispatch(addBook(bookDetails));
	};

	return (
		<div>
			<div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
				<h4 className='mb-8 text-xl font-bold text-center'>
					Add New Book
				</h4>
				<form className='book-form' onSubmit={handleAddBook}>
					<div className='space-y-2'>
						<label htmlFor='name'>Book Name</label>
						<input
							required
							className='text-input'
							type='text'
							id='input-Bookname'
							name='name'
						/>
					</div>

					<div className='space-y-2'>
						<label htmlFor='category'>Author</label>
						<input
							required
							className='text-input'
							type='text'
							id='input-Bookauthor'
							name='author'
						/>
					</div>

					<div className='space-y-2'>
						<label htmlFor='image'>Image Url</label>
						<input
							required
							className='text-input'
							type='text'
							id='input-Bookthumbnail'
							name='thumbnail'
						/>
					</div>

					<div className='grid grid-cols-2 gap-8 pb-4'>
						<div className='space-y-2'>
							<label htmlFor='price'>Price</label>
							<input
								required
								className='text-input'
								type='number'
								id='input-Bookprice'
								name='price'
							/>
						</div>

						<div className='space-y-2'>
							<label htmlFor='quantity'>Rating</label>
							<input
								required
								className='text-input'
								type='number'
								id='input-Bookrating'
								name='rating'
								min='1'
								max='5'
							/>
						</div>
					</div>

					<div className='flex items-center'>
						<input
							id='input-Bookfeatured'
							type='checkbox'
							name='featured'
							className='w-4 h-4'
						/>
						<label htmlFor='featured' className='ml-2 text-sm'>
							{' '}
							This is a featured book{' '}
						</label>
					</div>

					<button
						type='submit'
						className='submit bg-[#5850EC] border-2 hover:bg-transparent hover:text-[#5850EC] hover:font-semibold hover:border-[#5850EC]'
						id='submit'>
						Add Book
					</button>
				</form>
			</div>
		</div>
	);
}
