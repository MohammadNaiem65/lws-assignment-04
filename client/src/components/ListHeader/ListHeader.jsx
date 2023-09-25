export default function ListHeader({
	showAllBooks,
	setShowAllBooks,
	setSearchedBook,
}) {
	return (
		<div className='flex items-center justify-between mb-12'>
			<h4 className='mt-2 text-xl font-bold'>Book List</h4>

			<div className='flex items-center space-x-4'>
				<button
					className={`filter-btn ${showAllBooks && 'active-filter'}`}
					id='lws-filterAll'
					onClick={() => {
						setShowAllBooks(true);
						setSearchedBook('');
					}}>
					All
				</button>
				<button
					className={`filter-btn ${showAllBooks || 'active-filter'}`}
					id='lws-filterFeatured'
					onClick={() => {
						setShowAllBooks(false);
						setSearchedBook('');
					}}>
					Featured
				</button>
			</div>
		</div>
	);
}
