import { useDispatch } from 'react-redux';
import addBook from '../../redux/books/thunk/addBook';
import editBook from '../../redux/books/thunk/editBook';

export default function AddBookForm({ defaultValue, setDefaultValue }) {
	// ! Required hooks, functions and variables
	const dispatch = useDispatch();
	const { name, author, thumbnail, price, rating, featured, id } =
		defaultValue;

	const handleAddBook = (e) => {
		e.preventDefault();
		const form = e.target;

		const bookName = form.name.value;
		const bookAuthor = form.author.value;
		const bookThumbnail = form.thumbnail.value;
		const bookPrice = form.price.value;
		const bookRating = form.rating.value;
		const bookFeatured = form.featured.checked;

		const bookDetails = {
			name: bookName,
			author: bookAuthor,
			thumbnail: bookThumbnail,
			price: bookPrice,
			rating: bookRating,
			featured: bookFeatured,
		};

		dispatch(addBook(bookDetails));
		form.reset();
	};

	const handleEditBook = (e) => {
		e.preventDefault();
		const form = e.target;

		const bookName = form.name.value;
		const bookAuthor = form.author.value;
		const bookThumbnail = form.thumbnail.value;
		const bookPrice = form.price.value;
		const bookRating = form.rating.value;
		const bookFeatured = form.featured.checked;

		const bookDetails = {
			name: bookName,
			author: bookAuthor,
			thumbnail: bookThumbnail,
			price: bookPrice,
			rating: bookRating,
			featured: bookFeatured,
		};

		dispatch(editBook(bookDetails, id));
		form.reset();
		setDefaultValue({});
	};

	return (
		<div>
			<div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
				<h4 className='mb-8 text-xl font-bold text-center'>
					{name ? 'Edit A Book' : 'Add New Book'}
				</h4>
				<form
					className='book-form'
					onSubmit={name ? handleEditBook : handleAddBook}>
					<div className='space-y-2'>
						<label htmlFor='name'>Book Name</label>
						<input
							required
							className='text-input'
							type='text'
							id='input-Bookname'
							name='name'
							defaultValue={name && name}
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
							defaultValue={author && author}
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
							defaultValue={thumbnail && thumbnail}
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
								defaultValue={price && price}
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
								defaultValue={rating && rating}
							/>
						</div>
					</div>

					<div className='flex items-center'>
						<input
							id='input-Bookfeatured'
							type='checkbox'
							name='featured'
							className='w-4 h-4'
							checked={featured && featured}
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
						{name ? 'Edit Book' : 'Add Book'}
					</button>
				</form>
			</div>
		</div>
	);
}
