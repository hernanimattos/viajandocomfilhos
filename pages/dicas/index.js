import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { attributes as postAttributes } from '../../content/posts.md';
import Posts from '../../containers/Posts';
const Dicas = () => {
	const { post, title, description } = postAttributes;
	return (
		<Layout title={title} description={description}>
			<Posts posts={post} />
		</Layout>
	);
};
export default Dicas;
