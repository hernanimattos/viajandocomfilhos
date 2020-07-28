import Post from '../../components/Post';

const Posts = ({ posts }) => {
	return (
		<div className='row'>
			<div className='col-12'>
				<section>
					<header className='major'>
						<h2>Ultimas dicas de viajens</h2>
					</header>
					<div className='row'>
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
			</div>
		</div>
	);
};

export default Posts;
