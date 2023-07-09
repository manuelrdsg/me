import Head from 'next/head'

import { siteTitle } from 'utils/strings'

import Footer from './components/Footer'
import Header from './components/Header'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div
    className={
      'flex flex-1 flex-col bg-light-bg dark:bg-dark-bg dark:bg-dark-grain-texture min-h-full items-stretch flex-nowrap'
    }>
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
      />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>Manuel Rguez-Sanchez</title>
    </Head>
    <Header />
    <main className={'flex flex-1 flex-col min-h-full w-full max-w-5xl mt-12 mx-auto mb-24 py-0 px-6'}>{children}</main>
    <Footer />
  </div>
)
