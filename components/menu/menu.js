import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <section className="wrapper_nav">
      <nav id="nav">
        <ul>
          <li>
            <Link href="/posts">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Dropdown</a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
