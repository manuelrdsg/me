import { CameraIcon, MoonIcon, PencilIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTypography } from 'context/Typography.context'
import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

import LinkButton from 'components/LinkButton'

import { FONTS, FontValues } from 'styles/fonts'
import { DEFAULT_THEME, Themes } from 'styles/theme'

const themeButtonLookup: Record<string, ReactNode> = {
  [Themes.LIGHT]: <SunIcon className={'h-5 w-5'} />,
  [Themes.DARK]: <MoonIcon className={'h-5 w-5'} />,
}

const getCurrentTheme = (theme?: string) => {
  if (!theme || !Object.values(Themes).includes(theme as Themes)) return DEFAULT_THEME
  return theme
}

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const { font, changeFont } = useTypography()
  const currentTheme = getCurrentTheme(theme)

  const onChangeTheme = () => {
    if (currentTheme === Themes.DARK) setTheme(Themes.LIGHT)
    else setTheme(Themes.DARK)
  }

  const onChangeFont = () => {
    if (font.name === FontValues.inter) changeFont(FontValues.jetbrains)
    else changeFont(FontValues.inter)
  }

  return (
    <header
      className={
        'block sticky top-0 px-6 py-4 w-screen after:absolute after:inset-0 after:-z-50 after:border-b after:border-secondary/30 after:bg-dark-primary/80 after:dark:bg-dark-bg/80 after:backdrop-saturate-[180%] after:backdrop-blur-[20px] after:shadow-lg after:shadow-dark-primary/50 dark:after:shadow-dark-bg/50 md:after:shadow-xl md:after:shadow-dark-primary/50 z-50'
      }>
      <div className={'flex flex-row justify-between'}>
        <div className={'flex flex-row space-x-3 space-y-0'}>
          <LinkButton
            className={`${FONTS[FontValues.playfair].className} text-xl text-heading-text no-underline`}
            href="/">
            Manuel Rguez-Sanchez
          </LinkButton>
        </div>
        <div className={'flex flex-row space-x-3 space-y-0'}>
          <LinkButton
            className={`${FONTS[FontValues.playfair].className} hidden sm:flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-2 hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline`}
            href="/blog">
            <PencilIcon className={'h-5 w-5'} />
            <div>Scribbles</div>
          </LinkButton>
          <LinkButton
            className={`${FONTS[FontValues.playfair].className} hidden sm:flex flex-row space-x-1.5 space-y-0 justify-center items-center border-b-transparent border-b-4 border-dotted hover:border-b-secondary hover:dark:border-dark-secondary text-primary no-underline hover:no-underline`}
            href="https://tiles.manuelrdsg.com"
            newTab>
            <CameraIcon className={'h-5 w-5'} />
            <div>Tiles</div>
          </LinkButton>
          <button
            id={'theme-toggle'}
            aria-label={'theme-toggle'}
            onClick={onChangeTheme}
            className={
              'flex items-center justify-center rounded-lg p-1 border border-transparent hover:border-secondary hover:dark:border-dark-secondary'
            }>
            {themeButtonLookup[currentTheme]}
          </button>
          <button
            id={'font-toggle'}
            aria-label={'font-toggle'}
            onClick={onChangeFont}
            className={
              'flex items-center justify-center rounded-lg p-1 border border-transparent hover:border-secondary hover:dark:border-dark-secondary'
            }>
            <div
              className={`${font.value.className} h-5 w-5 items-center justify-center text-md text-center leading-normal`}>
              Aa
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
