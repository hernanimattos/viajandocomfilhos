import React from 'react';
import Link from 'next/link';
import { attributes as postAttributes } from '../../content/posts.md';
import Posts from '../../containers/Posts';
const Dicas = () => {
	const { post, title, description } = postAttributes;
	return (
		<div>
			<Posts posts={post} />
		</div>
	);
};
export default Dicas;
