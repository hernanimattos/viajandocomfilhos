import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout.js';
import { attributes as postAttributes } from '../../content/posts.md';
import Posts from '../../containers/Posts/Posts';

const PostsPage = () => {
  const { posts, title, description } = postAttributes;
  return (
    <Layout title={title} description={description}>
    <Posts posts={posts} />
    </Layout>
  );
};

export default PostsPage;
