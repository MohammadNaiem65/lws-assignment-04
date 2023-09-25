export default function ListHeader({ setShowAllBooks }) {
	return (
		<div className='flex items-center justify-between mb-12'>
			<h4 className='mt-2 text-xl font-bold'>Book List</h4>

			<div className='flex items-center space-x-4'>
				<button
					className='filter-btn active-filter'
					id='lws-filterAll'
					onClick={() => setShowAllBooks(true)}>
					All
				</button>
				<button
					className='filter-btn'
					id='lws-filterFeatured'
					onClick={() => setShowAllBooks(false)}>
					Featured
				</button>
			</div>
		</div>
	);
}
