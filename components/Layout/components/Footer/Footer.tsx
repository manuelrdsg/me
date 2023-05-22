import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={'mx-auto max-w-5xl px-6 w-full'}>
      <div className={'flex flex-row justify-between py-6 border-t border-secondary dark:border-dark-secondary'}>
        <div className={'flex flex-row space-x-3'}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/cv">CV</Link>
        </div>
        <div className={'flex flex-row space-x-3'}>
          <Link href="https://tiles.manuelrdsg.com">Tiles</Link>
          <Link href="https://twitter.com/manuelrdsg">Twitter</Link>
          <Link href="https://github.com/manuelrdsg">GitHub</Link>
        </div>
      </div>
    </footer>
  )
}
