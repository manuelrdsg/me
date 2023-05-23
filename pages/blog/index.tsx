import { Post } from 'models/PostModel'
import { GetStaticProps } from 'next'

import Date from 'components/Date'
import Layout from 'components/Layout'
import Link from 'components/Link'

import { getSortedPostsData } from 'lib/posts'

const Blog = ({ allPostsData }: { allPostsData: Post[] }) => {
  return (
    <Layout>
      <div className={'mb-8'}>
        <h2 className={'font-bold text-3xl md:text-5xl text-heading-text dark:text-dark-primary'}>Blog</h2>
        <p className={'text-sm text-secondary-text dark:text-dark-primary'}>{`${allPostsData.length} posts`}</p>
      </div>
      <ul>
        {allPostsData.map(({ id, metadata }) => (
          <li className={'flex flex-col mb-6 gap-1'} key={id}>
            <Link className={'font-bold text-xl'} href={`/blog/${id}`}>
              {metadata.title}
            </Link>
            <div className={'flex flex-col gap-1.5'}>
              <p className={'text-md text-secondary-text dark:text-dark-secondary-text'}>{metadata.subtitle}</p>
              <Date className={'text-sm'} dateString={metadata.date} />
            </div>
          </li>
        ))}
      </ul>
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

export default Blog
