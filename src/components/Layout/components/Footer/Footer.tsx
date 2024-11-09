import { CameraIcon, PencilIcon, UserIcon } from '@heroicons/react/24/outline'
import { useTypography } from 'context'

import LinkButton from 'components/LinkButton'

export const Footer = () => {
  const { font } = useTypography()
  return (
    <>
      {/* Footer for larger screens */}
      <footer className={`${font.value.className} flex flex-col mx-auto w-full space-y-2`}>
        <div className={'hidden sm:flex flex-row justify-between pt-6 border-t border-secondary/30 px-6'}>
          <div className={'flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3 '}>
            <LinkButton className={'text-secondary-text no-underline'} href="/">
              Home
            </LinkButton>
            <LinkButton className={'text-secondary-text no-underline'} href="/blog">
              Scribbles
            </LinkButton>
            {/*TODO: Restore when Uses page is added #16*/}
            {/*<LinkButton className={'text-secondary-text no-underline'} href="/uses">*/}
            {/*  Uses*/}
            {/*</LinkButton>*/}
          </div>
          <div className={'flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3 '}>
            <LinkButton className={'text-secondary-text no-underline'} href="https://twitter.com/manuelrdsg">
              Twitter
            </LinkButton>
            <LinkButton className={'text-secondary-text no-underline'} href="https://github.com/manuelrdsg">
              GitHub
            </LinkButton>
          </div>
        </div>
        <div className={'grid pb-6 px-6'}>
          <p className={'justify-self-end text-secondary-text dark:text-dark-secondary-text text-sm'}>
            © {new Date().getFullYear()} Manuel Rodríguez-Sánchez Guerra
          </p>
        </div>
      </footer>
      {/* Footer for small screens */}
      <footer
        className={`${font.value.className} sm:hidden border-t border-t-border-main sticky bottom-0 py-1.5 px-4 mt-0 w-auto bg-transparent z-50 after:absolute after:inset-0 after:-z-50  after:bg-dark-primary/80 after:dark:bg-dark-bg/80 after:backdrop-saturate-[180%] after:backdrop-blur-[20px] after:shadow-lg after:shadow-dark-primary/50 dark:after:shadow-dark-bg/50 md:after:shadow-xl md:after:shadow-dark-primary/50 shadow-md`}>
        <div className={'flex flex-row justify-center items-center py-0 '}>
          <div className={'flex flex-column justify-between max-w-md px-6 w-full items-center'}>
            <LinkButton
              className={
                'flex flex-col justify-center items-center border-b-transparent border-b-2 border-dashed hover:border-b-secondary hover:dark:border-dark-secondary text-primary  text-xs no-underline hover:no-underline'
              }
              href="/">
              <UserIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div className={`pt-1`}>Me</div>
            </LinkButton>
            <LinkButton
              className={
                'flex flex-col justify-center items-center border-b-transparent border-b-2 hover:border-b-secondary hover:dark:border-dark-secondary text-primary text-xs no-underline hover:no-underline'
              }
              href="/blog">
              <PencilIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div className={`pt-1`}>Scribbles</div>
            </LinkButton>
            <LinkButton
              className={
                'flex flex-col justify-center items-center border-b-transparent border-b-4 border-dotted hover:border-b-secondary hover:dark:border-dark-secondary text-primary  text-xs no-underline hover:no-underline '
              }
              href="https://tiles.manuelrdsg.com">
              <CameraIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div className={`pt-1`}>Tiles</div>
            </LinkButton>
            {/*TODO: Restore when Projects page is added #15*/}
            {/*<LinkButton*/}
            {/*  className={*/}
            {/*    'flex flex-col justify-center items-center border-b-transparent border-b-4 border-double hover:border-b-secondary hover:dark:border-dark-secondary text-primary  text-xs  no-underline hover:no-underline'*/}
            {/*  }*/}
            {/*  href="https://tiles.manuelrdsg.com">*/}
            {/*  <FolderOpenIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />*/}
            {/*  <div className={`${playfair.className} pt-1`}>Projects</div>*/}
            {/*</LinkButton>*/}
          </div>
        </div>
      </footer>
    </>
  )
}
