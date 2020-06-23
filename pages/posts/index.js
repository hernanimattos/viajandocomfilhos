import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { attributes as postAttributes } from '../../content/posts.md';
import Posts from '../../containers/posts/Posts';

const PostsPage = () => {
  const [postAttrs, setPostAttrs] = useState({
    title: '',
    description: '',
    posts: [],
  });
  const setAttr = (postAttributes) => {
    const { posts, title, description } = postAttributes;
    setPostAttrs({
      title,
      posts,
      description,
    });
  };
  useEffect(() => {
    setAttr(postAttrs);
  }, []);

  return (
    <Layout title={postAttrs.title} description={postAttrs.description}>
    <Posts posts={postAttrs.posts} />
    </Layout>
  );
};

export default PostsPage;
