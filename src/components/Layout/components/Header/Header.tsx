import { CameraIcon, MoonIcon, PencilIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { Playfair_Display } from 'next/font/google'
import { ReactNode } from 'react'

import LinkButton from 'components/LinkButton'

const playfair = Playfair_Display({ weight: ['500'], subsets: ['latin'] })

export const Header = () => {
  const { theme: currentTheme = 'system', setTheme, systemTheme = 'light' } = useTheme()

  const theme = currentTheme === 'system' ? systemTheme : currentTheme

  const themeButtonLookup: Record<string, ReactNode> = {
    light: <SunIcon className={'h-5 w-5'} />,
    dark: <MoonIcon className={'h-5 w-5'} />,
  }

  return (
    <header
      className={
        'block sticky top-0 px-6 py-4 w-screen after:absolute after:inset-0 after:-z-50 after:border-b after:border-secondary/30 after:bg-dark-primary/80 after:dark:bg-dark-bg/80 after:backdrop-saturate-[180%] after:backdrop-blur-[20px] after:shadow-lg after:shadow-dark-primary/50 dark:after:shadow-dark-bg/50 md:after:shadow-xl md:after:shadow-dark-primary/50 z-50'
      }>
      <div className={'flex flex-row justify-between'}>
        <div className={'flex flex-row space-x-3 space-y-0'}>
          <LinkButton className={`${playfair.className} text-xl text-heading-text font-bold no-underline`} href="/">
            Manuel Rguez-Sanchez
          </LinkButton>
        </div>
        <div className={'flex flex-row space-x-3 space-y-0'}>
          <LinkButton
            className={`${playfair.className} hidden sm:flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-2 hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline font-bold`}
            href="/blog">
            <PencilIcon className={'h-5 w-5'} />
            <div>Scribbles</div>
          </LinkButton>
          <LinkButton
            className={`${playfair.className} hidden sm:flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-4 border-dotted hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline font-bold`}
            href="https://tiles.manuelrdsg.com"
            newTab>
            <CameraIcon className={'h-5 w-5'} />
            <div>Tiles</div>
          </LinkButton>
          {/*TODO: Restore when Projects page is added #15*/}
          {/*<LinkButton*/}
          {/*  className={`${playfair.className} hidden sm:flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-4 border-double hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline font-bold`}*/}
          {/*  href="https://tiles.manuelrdsg.com">*/}
          {/*  <FolderOpenIcon className={'h-5 w-5'} />*/}
          {/*  <div>Projects</div>*/}
          {/*</LinkButton>*/}
          <button
            id={'theme-toggle'}
            aria-label={'theme-toggle'}
            onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
            className={
              'flex items-center justify-center rounded-lg p-1 border border-transparent hover:border-secondary hover:dark:border-dark-secondary'
            }>
            {themeButtonLookup[theme]}
          </button>
        </div>
      </div>
    </header>
  )
}
