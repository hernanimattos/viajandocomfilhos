import Link from 'next/link';

const Post = ({ title, description, thumbnail }) => {
	return (
		<div class='w-full md:w-1/3 overflow-hiddenpx-2 px-3 py-3'>
			<div className='content-card shadow-lg hover:bg-blue-500 transition-all'>
				<img class='w-full' src={thumbnail} alt={title} />
				<div class='px-6 py-4'>
					<div class='font-bold text-xl mb-2'>{title}</div>
					<p class='text-gray-700 text-base'>{description}</p>
				</div>
				<div class='px-6 py-4'>
					<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#photography
					</span>
					<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#travel
					</span>
					<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
						#winter
					</span>
				</div>
			</div>
		</div>
	);
};
export default Post;
