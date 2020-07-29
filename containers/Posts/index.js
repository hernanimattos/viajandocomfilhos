import React, { Fragment } from 'react';
import Post from '../../components/Post';

const Posts = ({ posts }) => {
	console.log(posts, 'pppp');
	return (
		<Fragment>
			<section className='px-2'>
				<div className='flex -mx-2 flex-wrap '>
					{posts
						? posts.map((post, i) => {
								return (
									<Post
										title={post.title}
										description={post.description}
										thumbnail={post.thumbnail}
										key={i}
									/>
								);
						  })
						: ''}
				</div>
			</section>
		</Fragment>
	);
};

export default Posts;
