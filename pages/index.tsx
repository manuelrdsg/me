import { Post } from 'models/PostModel'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Date from 'components/Date'
import Layout from 'components/Layout'

import { getSortedPostsData } from 'lib/posts'

import utilStyles from 'styles/utils.module.css'

import { siteTitle } from 'utils/strings'

const Home = ({ allPostsData }: { allPostsData: Post[] }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <a className={utilStyles.headingLg} href={`/blog`}>
          Blog
        </a>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, metadata }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{metadata.title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={metadata.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
