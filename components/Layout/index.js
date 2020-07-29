import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../Header';

const Layout = ({ children, ...props }) => {
	return (
		<Fragment>
			<Head>
				<meta name='title' content={props.title} />
				<meta name='description' content={props.description} />
			</Head>
			<section id='main'>
				<Header />
				<div className='container mx-auto'>{children}</div>
			</section>
		</Fragment>
	);
};

export default Layout;
