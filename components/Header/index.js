import React, { Fragment } from 'react';
import Link from 'next/link';
import Menu from '../Menu';

const Header = () => {
	return (
		<Fragment>
			<Menu />
			{/* <div className='bg-gray-200 p-3 shadow-md'>
				<div className='container mx-auto'>
					<Link href='/'>
						<a>logo</a>
					</Link>
				</div>
			</div>
			<div className='bg-gray-200 p-3 shadow-inner'>
				<nav className='container mx-auto text-center'>
					<Link href='/'>
						<a className='p-2 hover:underline'>Home</a>
					</Link>
					<Link href='/dicas'>
						<a className='p-2 hover:underline'>Dicas</a>
					</Link>
					<Link href='/contato'>
						<a className='p-2 hover:underline'>Contato</a>
					</Link>
				</nav>
			</div> */}
		</Fragment>
	);
};

export default Header;
