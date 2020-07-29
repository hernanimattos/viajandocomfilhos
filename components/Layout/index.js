import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../Header';

const Layout = ({ children, ...props }) => {
	return (
		<Fragment>
			<Head>
				<meta name='title' content={props.title} />
				<meta name='description' content={props.description} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:description' content={props.description} />
				<meta name='twitter:title' content={props.title} />
				<meta name='twitter:site' content='viajandocomfilhos.com.br' />
				<meta name='twitter:image' content={props.thumbnail} />
				<meta name='twitter:creator' content='viajandocomfilhos.com.br' />
			</Head>
			<section id='main'>
				<Header />
				<div className='container mx-auto'>{children}</div>
			</section>
		</Fragment>
	);
};

export default Layout;
