import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello world!</h1>
      <h2>Pezzo de merda</h2>
      <p>Need a web site? <Link to="/contactUs">Contact Us</Link></p>
    </Layout>
  )
}

export default IndexPage
