import { ClockIcon, MapIcon } from '@heroicons/react/24/outline'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import CodeBlock from 'components/CodeBlock'
import Date from 'components/Date'
import Layout from 'components/Layout'

import { getAllPostIds, getPostData } from 'lib/posts'

const Post = ({
  postData,
}: {
  postData: {
    title: string
    subtitle: string
    location: string
    date: string
    markdownBody: string
  }
}) => {
  return (
    <Layout>
      <article className={'flex flex-col gap-8 md:gap-10 h-entry justify-center'}>
        <header className={'stack flex [&_>_*]:m-0 stack--column flex-col space-y-4 border-b border-secondary pb-4'}>
          <h1 className={'font-bold text-3xl md:text-5xl text-heading-text dark:text-dark-heading-text'}>
            {postData.title}
          </h1>
          {!!postData.subtitle && (
            <div className={'text-secondary-text dark:text-dark-secondary-text'}>{postData.subtitle}</div>
          )}
          <div className={'flex flex-row space-x-4'}>
            <div
              className={
                'flex flex-row space-x-1 text-secondary-text text-xs dark:text-dark-secondaty-text items-center'
              }>
              <ClockIcon className={'h-4 w-4'} />
              <Date dateString={postData.date} />
            </div>
            {!!postData.location && (
              <div
                className={
                  'flex flex-row space-x-1 text-secondary-text text-xs dark:text-dark-secondaty-text items-center'
                }>
                <MapIcon className={'h-4 w-4'} />
                <div>{postData.location}</div>
              </div>
            )}
          </div>
        </header>
        <ReactMarkdown
          components={{
            // @ts-ignore
            code: CodeBlock,
            // @ts-ignore
            image: Image,
          }}
          className={'prose'}>
          {postData.markdownBody}
        </ReactMarkdown>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)

  return {
    props: {
      postData,
    },
  }
}

export default Post
