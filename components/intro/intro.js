import React from 'react';
import Link from 'next/link';

const Intro = () => (
  <>
    <section id="intro" className="container">
      <div className="row">
        <div className="col-4 col-12-medium">
          <section className="first">
            <i className="icon solid featured fa-cog"></i>
            <header>
              <h2>Ipsum consequat</h2>
            </header>
            <p>
              Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros
              et magna tempus.
            </p>
          </section>
        </div>
        <div className="col-4 col-12-medium">
          <section className="middle">
            <i className="icon solid featured alt fa-bolt"></i>
            <header>
              <h2>Magna etiam dolor</h2>
            </header>
            <p>
              Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros
              et magna tempus.
            </p>
          </section>
        </div>
        <div className="col-4 col-12-medium">
          <section className="last">
            <i className="icon solid featured alt2 fa-star"></i>
            <header>
              <h2>Tempus adipiscing</h2>
            </header>
            <p>
              Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros
              et magna tempus.
            </p>
          </section>
        </div>
      </div>
      <footer>
        <ul className="actions">
          <li>
            <Link href="#">
              <a className="button large">Get Started</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="button alt large">Learn More</a>
            </Link>
          </li>
        </ul>
      </footer>
    </section>
  </>
);

export default Intro;
