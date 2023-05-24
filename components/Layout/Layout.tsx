import Head from 'next/head'

import { siteTitle } from 'utils/strings'

import Footer from './components/Footer'
import Header from './components/Header'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={'flex flex-1 flex-col dark:bg-dark-bg min-h-full items-stretch flex-nowrap'}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header />
    <main className={'flex flex-col flex-1 min-h-full max-w-xl mt-12 mx-auto mb-24 py-0 px-6'}>{children}</main>
    <Footer />
  </div>
)
