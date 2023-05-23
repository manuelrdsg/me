import Link from 'components/Link'

export const Footer = () => {
  return (
    <footer className={' flex flex-col mx-auto max-w-5xl px-6 w-full space-y-2'}>
      <div className={'flex flex-row justify-between pt-6 border-t border-secondary dark:border-dark-secondary'}>
        <div className={'flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3 '}>
          <Link className={'text-secondary-text no-underline'} href="/">
            Home
          </Link>
          <Link className={'text-secondary-text no-underline'} href="/blog">
            Blog
          </Link>
          <Link className={'text-secondary-text no-underline'} href="/cv">
            CV
          </Link>
        </div>
        <div className={'flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3 '}>
          <Link className={'text-secondary-text no-underline'} href="https://tiles.manuelrdsg.com">
            Tiles
          </Link>
          <Link className={'text-secondary-text no-underline'} href="https://twitter.com/manuelrdsg">
            Twitter
          </Link>
          <Link className={'text-secondary-text no-underline'} href="https://github.com/manuelrdsg">
            GitHub
          </Link>
        </div>
      </div>
      <div className={'grid pb-6'}>
        <p className={'justify-self-end text-secondary-text text-sm'}>
          © {new Date().getFullYear()} Manuel Rodríguez-Sánchez Guerra
        </p>
      </div>
    </footer>
  )
}
