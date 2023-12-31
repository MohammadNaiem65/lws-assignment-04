import { useState } from 'react';
import './App.css';
import AddBookForm from './components/AddBookForm/AddBookForm';
import BookContainer from './components/BookContainer/BookContainer';
import ListHeader from './components/ListHeader/ListHeader';
import Navbar from './components/Navbar/Navbar';

function App() {
	// ! Required hooks and variables
	const [showAllBooks, setShowAllBooks] = useState(true);
	const [searchedBook, setSearchedBook] = useState('');
	const [defaultValue, setDefaultValue] = useState({})

	return (
		<div className='bg-gray-300'>
			{/* //  Navbar  */}
			<Navbar setSearchedBook={setSearchedBook} />

			<main className='py-12 2xl:px-6'>
				<div className='container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8'>
					<div className='order-2 xl:-order-1'>
						{/* Book list header */}
						<ListHeader
							showAllBooks={showAllBooks}
							setShowAllBooks={setShowAllBooks}
							setSearchedBook={setSearchedBook}
						/>

						{/* Book container */}
						<BookContainer
							showAllBooks={showAllBooks}
							searchedBook={searchedBook}
							setDefaultValue={setDefaultValue}
						/>
					</div>

					{/* Add book form */}
					<AddBookForm
						defaultValue={defaultValue}
						setDefaultValue={setDefaultValue}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
