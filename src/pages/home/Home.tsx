import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getSortedPostsData } from 'lib/posts'

import Layout from 'components/Layout'

import { Post } from 'models/PostModel'

import ProfileImage from './components/ProfileImage'
import SelfDescription from './components/SelfDescription'

const PROFILE_IMAGE_URL = 'https://res.cloudinary.com/manuelrdsg/image/upload/v1731512007/Portfolio/profile.webp'

const Home = ({ allPostsData }: { allPostsData?: Post[] }) => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={PROFILE_IMAGE_URL} />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </Head>
      <Layout>
        <div className={'md:flex-1 flex flex-col items-stretch justify-center'}>
          <div className={'block mx-0 w-full md:grid md:grid-cols-2 md:gap-[3.5rem] justify-center items-center'}>
            <div className="relative max-w-xl mx-auto min-w-screen md:mx-0 block h-72 md:h-[50rem]">
              <ProfileImage />
            </div>
            <div className="max-w-xl mx-auto md:mx-0 py-[3.5rem] h-auto md:self-center">
              <SelfDescription />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default Home
