import { useTypography } from 'context'
import { GetStaticProps } from 'next'

import { getSortedPostsData } from 'lib/posts'

import Layout from 'components/Layout'
import LinkButton from 'components/LinkButton'
import Date from 'components/PostIndicators/Date'
import ReadTime from 'components/PostIndicators/ReadTime'

import { Post } from 'models/PostModel'

const Blog = ({ allPostsData }: { allPostsData: Post[] }) => {
  const { font } = useTypography()
  return (
    <Layout>
      <div className={`${font.value.className} mb-8`}>
        <h2 className={'font-bold text-3xl md:text-5xl text-heading-text dark:text-dark-primary'}>Scribbles</h2>
        <p className={'text-md text-secondary-text dark:text-dark-primary mt-4 max-w-xl'}>
          {
            'Mostly brain dumps, experiences, and thoughts. I write about things I find interesting, recommendations, cross-platform development, startups and design'
          }
        </p>
      </div>
      <ul>
        {allPostsData.map(({ id, metadata }) => (
          <li className={`${font.value.className} flex flex-col mb-6 gap-1`} key={id}>
            <LinkButton className={'font-bold text-xl'} href={`/blog/${id}`}>
              {metadata.title}
            </LinkButton>
            <div className={'flex flex-col gap-1.5'}>
              <p className={'text-md text-secondary-text dark:text-dark-secondary-text'}>{metadata.subtitle}</p>
              <div className={'flex flex-row gap-x-1.5'}>
                <Date className={'text-xs'} dateString={metadata.date} />
                {!!metadata.readingMins && <ReadTime readMins={metadata.readingMins} className={'text-xs'} />}
              </div>
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
