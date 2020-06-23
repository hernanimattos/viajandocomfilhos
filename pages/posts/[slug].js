import React, { Fragment } from 'react';

const Post = ({ title, content }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <article>{content}</article>
    </Fragment>
  );
};

export default Post;
