import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Menu from '../menu/menu'
import Banner from '../banner/banner'
import Intro from '../intro/intro'
import Post from '../post/post'

const Layout = () => {
  return (
    <>
      <section id="header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://viajandocomfilhos.com.br" />
        </Helmet>
        <h1>
          <Link to="/">Dopetrope</Link>
        </h1>
        <Menu />
        <Banner />
        <Intro />
      </section>
      <Post />
    </>
  )
}

export default Layout
