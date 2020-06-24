import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout.js';
import { attributes as postAttributes } from '../../content/posts.md';
import Posts from '../../containers/Posts/Posts';

const PostsPage = () => {
  const { post, title, description } = postAttributes;
  return (
    <Layout title={title} description={description}>
    <Posts posts={post} />
    </Layout>
  );
};

export default PostsPage;
