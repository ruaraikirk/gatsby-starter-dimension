import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Your message has been sent!</h1>
    <p>We will respond to your query soon.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
