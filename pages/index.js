import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Posts from '../containers/posts/Posts';
import { attributes, react as HomeContent } from '../content/home.md';
import { attributes as postAttributes } from '../content/posts.md';

const Home = () => {
  let { title, description } = attributes;
  const { posts } = postAttributes;

  return (
    <Layout title={title} description={description}>
      home
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Posts posts={posts} />
    </Layout>
  );
};

export default Home;
