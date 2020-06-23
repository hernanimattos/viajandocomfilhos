import React, { Fragment } from 'react';
import Head from 'next/head';
import Menu from '../menu/Menu';
import Banner from '../banner/Banner';

const Layout = ({ children, ...props }) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
      </Head>
      <section id="main">
        <div className="container">
          <Menu />
          <Banner />
          {children}
        </div>
      </section>
    </Fragment>
  );
};

export default Layout;
