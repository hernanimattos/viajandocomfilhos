import Head from 'next/head';
import Layout from '../components/Layout';
import Posts from '../containers/Posts';
import { attributes, react as HomeContent } from '../content/home.md';
import { attributes as postAttributes } from '../content/posts.md';

const Home = () => {
	let { title, description } = attributes;
	const { post } = postAttributes;

	return (
		<Layout title={title} description={description}>
			home
			<Head>
				<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
			</Head>
			<Posts posts={post} />
		</Layout>
	);
};

export default Home;
