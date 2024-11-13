import Head from 'next/head'

import { siteDescription, siteTitle } from 'utils/strings'

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
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={siteDescription} />
      <meta
        property="og:image"
        content={'https://res.cloudinary.com/manuelrdsg/image/upload/v1731512007/Portfolio/header4.webp'}
      />
      <meta property="og:url" content="https://me.manuelrdsg.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>Manuel Rguez-Sanchez</title>
    </Head>
    <Header />
    <main className={'flex flex-1 flex-col min-h-full w-full max-w-5xl mt-12 mx-auto mb-24 py-0 px-6'}>{children}</main>
    <Footer />
  </div>
)
