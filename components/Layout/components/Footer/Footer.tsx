import { CameraIcon, FolderOpenIcon, PencilIcon, UserIcon } from '@heroicons/react/24/outline'

import LinkButton from 'components/LinkButton'

export const Footer = () => {
  return (
    <>
      {/* Footer for small screens */}
      <footer
        className={
          'sm:hidden bg-transparent sticky bottom-0 w-screen after:absolute after:inset-0 after:-z-50 after:border-t after:border-secondary/30 after:bg-dark-primary/80 after:dark:bg-dark-bg/80 after:backdrop-saturate-[180%] after:backdrop-blur-[20px] after:shadow-lg after:shadow-dark-primary/50 dark:after:shadow-dark-bg/50 md:after:shadow-xl md:after:shadow-dark-primary/50 z-50'
        }>
        <div className={'flex flex-row  justify-center max-w-3 items-center py-3'}>
          <div className={'flex flex-column justify-between max-w-lg px-8 w-full  items-center'}>
            <LinkButton
              className={
                'flex flex-col space-y-0 justify-center items-center border-b-transparent border-b-2 border-dashed hover:border-b-secondary hover:dark:border-dark-secondary text-primary xs:text-base text-xs no-underline hover:no-underline font-bold'
              }
              href="/">
              <UserIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div>Me</div>
            </LinkButton>
            <LinkButton
              className={
                'flex flex-col space-y-0 justify-center items-center border-b-transparent border-b-2 hover:border-b-secondary hover:dark:border-dark-secondary text-primary xs:text-base text-xs no-underline hover:no-underline font-bold'
              }
              href="/blog">
              <PencilIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div>Scribbles</div>
            </LinkButton>
            <LinkButton
              className={
                'flex flex-col space-y-0 justify-center items-center border-b-transparent border-b-4 border-dotted hover:border-b-secondary hover:dark:border-dark-secondary text-primary xs:text-base text-xs no-underline hover:no-underline font-bold'
              }
              href="https://tiles.manuelrdsg.com">
              <CameraIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div>Tiles</div>
            </LinkButton>
            <LinkButton
              className={
                'flex flex-col space-y-0 justify-center items-center border-b-transparent border-b-4 border-double hover:border-b-secondary hover:dark:border-dark-secondary text-primary xs:text-base text-xs  no-underline hover:no-underline font-bold'
              }
              href="https://tiles.manuelrdsg.com">
              <FolderOpenIcon className={'xs:h-5 xs:w-5 h-4 w-4'} />
              <div>Projects</div>
            </LinkButton>
          </div>
        </div>
      </footer>
      {/* Footer for larger screens */}
      <footer className={'hidden sm:flex flex-col mx-auto w-full space-y-2'}>
        <div className={'flex flex-row justify-between pt-6 border-t border-secondary/30 px-6'}>
          <div className={'flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3 '}>
            <LinkButton className={'text-secondary-text no-underline'} href="/">
              Home
            </LinkButton>
            <LinkButton className={'text-secondary-text no-underline'} href="/blog">
              Scribbles
            </LinkButton>
            <LinkButton className={'text-secondary-text no-underline'} href="/uses">
              Uses
            </LinkButton>
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
    </>
  )
}
