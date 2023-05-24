import { CameraIcon, FolderOpenIcon, MoonIcon, PencilIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

import Link from 'components/Link'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header
      className={
        'block sticky top-0 px-6 py-4 after:absolute after:inset-0 after:-z-50 after:border-b after:border-secondary/30 after:bg-dark-primary/80 after:dark:bg-dark-bg/80 after:backdrop-saturate-[180%] after:backdrop-blur-[20px] after:shadow-lg after:shadow-dark-primary/50 dark:after:shadow-dark-bg/50 md:after:shadow-xl md:after:shadow-dark-primary/50'
      }>
      <div className={'flex flex-row justify-between'}>
        <div className={'flex flex-row space-x-3 space-y-0'}>
          <Link className={'text-xl text-heading-text font-bold no-underline'} href="/">
            Manuel Rguez-Sanchez
          </Link>
        </div>
        <div className={'flex flex-row space-x-3 space-y-0'}>
          <Link
            className={
              'flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-2 hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline font-bold'
            }
            href="/blog">
            <PencilIcon className={'h-4 w-4'} />
            <div>Blog</div>
          </Link>
          <Link
            className={
              'flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-4 border-dotted hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline font-bold'
            }
            href="https://tiles.manuelrdsg.com">
            <CameraIcon className={'h-4 w-4'} />
            <div>Tiles</div>
          </Link>
          <Link
            className={
              'flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-4 border-double hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline font-bold'
            }
            href="https://tiles.manuelrdsg.com">
            <FolderOpenIcon className={'h-4 w-4'} />
            <div>Projects</div>
          </Link>
          <button
            onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
            className={
              'flex items-center justify-center rounded-lg p-1 border border-transparent hover:border-secondary hover:dark:border-dark-secondary'
            }>
            {theme === 'light' ? <SunIcon className={'h-4 w-4'} /> : <MoonIcon className={'h-4 w-4'} />}
          </button>
        </div>
      </div>
    </header>
  )
}
