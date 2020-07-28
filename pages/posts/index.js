import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { attributes as postAttributes } from '../../content/dicas.md';
import Posts from '../../containers/Posts';

const PostsPage = () => {
	return (
		<Layout title={title} description={description}>
			<Posts posts={post} />
		</Layout>
	);
};

export default PostsPage;
