import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>Neil Cooks</h1>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
