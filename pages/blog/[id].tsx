import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import CodeBlock from 'components/CodeBlock'
import Date from 'components/Date'
import Layout from 'components/Layout'

import { getAllPostIds, getPostData } from 'lib/posts'

import utilStyles from 'styles/utils.module.css'

const Post = ({
  postData,
}: {
  postData: {
    title: string
    date: string
    markdownBody: string
  }
}) => {
  return (
    <Layout>
      <article className={'flex flex-col gap-8 md:gap-10 h-entry justify-center'}>
        <header className={'stack flex [&_>_*]:m-0 stack--column flex-col space-y-4'}>
          <h1 className={'font-bold text-3xl p-name md:text-5xl'}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
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
