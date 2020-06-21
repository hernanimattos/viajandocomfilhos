import React from 'react';
import Layout from '../../components/layout/Layout';
import { attributes as postAttributes } from '../../content/posts.md';

const Posts = () => {
  const { posts } = postAttributes;
  return (
    <Layout title="aqui e posts">
      <Posts posts={posts} />
    </Layout>
  );
};

export default Posts;
