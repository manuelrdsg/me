import { type Post } from 'models/PostModel'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Inter } from 'next/font/google'

import CodeBlock from 'components/CodeBlock'
import Date from 'components/PostIndicators/Date'
import Location from 'components/PostIndicators/Location'
import Layout from 'components/Layout'

import { getAllPostIds, getPostData } from 'lib/posts'

const inter = Inter({ weight: '400', subsets: ['latin'] })

const Post = ({ postData }: { postData: Post }) => (
  <Layout>
    <article className={'flex flex-col gap-8 md:gap-10 h-entry justify-center'}>
      <header className={'stack flex [&_>_*]:m-0 stack--column flex-col space-y-4 border-b border-secondary pb-4'}>
        <h1 className={`font-bold text-3xl md:text-5xl text-heading-text dark:text-dark-primary`}>
          {postData.metadata.title}
        </h1>
        {!!postData.metadata.subtitle && (
          <div className={'text-secondary-text dark:text-dark-secondary-text'}>{postData.metadata.subtitle}</div>
        )}
        <div className={'flex flex-row space-x-4'}>
          <Date dateString={postData.metadata.date} />
          {!!postData.metadata.location && <Location location={postData.metadata.location} />}
        </div>
      </header>
      <div className={'self-center max-w-full'}>
        <ReactMarkdown
          components={{
            code: CodeBlock,
            // @ts-ignore
            image: Image,
          }}
          className={`${inter.className} prose prose-sm sm:prose lg:prose-lg dark:prose-invert self-center max-w-full`}>
          {postData.body}
        </ReactMarkdown>
      </div>
    </article>
  </Layout>
)

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
