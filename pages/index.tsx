import { Post } from 'models/PostModel'
import { GetStaticProps } from 'next'
import { Shrikhand } from 'next/font/google'
import Image from 'next/image'

import Layout from 'components/Layout'
import Link from 'components/Link'

import { getSortedPostsData } from 'lib/posts'

const profPic = require('public/images/profile.jpeg')

const shrikhand = Shrikhand({ weight: '400', subsets: ['latin'] })
// const metal = Metal({ weight: '400', subsets: ['latin'] })

const Home = ({ allPostsData }: { allPostsData: Post[] }) => {
  return (
    <Layout>
      <div className={'md:flex-1 flex flex-col items-stretch justify-center'}>
        <div className={'block mx-0 w-full md:grid md:grid-cols-2 md:gap-[3.5rem] justify-center items-center'}>
          <div className="relative max-w-xl mx-auto min-w-screen md:mx-0 block h-72 md:h-[50rem]">
            <div className="relative block border border-dark-primary rounded-xl overflow-hidden shadow-sm dark:shadow-md w-full h-full">
              <div className="h-full w-full relative overflow-hidden z-1 bg-neutral-100">
                <Image
                  className="h-full w-full object-cover text-transparent opacity-100 scale-150 grayscale-0 brightness-100 dark:grayscale-15 dark:brightness-90"
                  fill
                  src={profPic}
                  alt="profPic"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto md:mx-0 py-[3.5rem] h-auto md:self-center">
            <h1 className={`${shrikhand.className} text-4xl`}>hola.</h1>
            <p>
              I&apos;m Manuel, a <span className={'italic'}>software engineer with a love for design</span>{' '}
              <span className={'font-bold'}>
                <del>living in London, Madrid</del> working remotely.{' '}
              </span>
              I&apos;m currently working as a Lead Mobile Engineer at{' '}
              <Link href={'https://www.bolster.co/'}>Bolster</Link>, helping the team to shape beautiful and functional
              products.{' '}
              <p className={'mt-2'}>
                I absolutely love collecting and listening to music, and I’m always carrying a film camera with me to
                snap some pictures.
              </p>
            </p>
          </div>
        </div>
      </div>
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
