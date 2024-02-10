import { Shrikhand } from 'next/font/google'

import Link from 'components/Link'

const shrikhand = Shrikhand({ weight: '400', subsets: ['latin'] })

export const SelfDescription = () => {
  return (
    <>
      <h1 className={`${shrikhand.className} text-4xl`}>hola.</h1>
      <p>
        I&apos;m Manuel, a <span className={'italic'}>software engineer with a love for design</span>{' '}
        <span className={'font-bold'}>
          <del>living in London, Madrid</del> working remotely.{' '}
        </span>
        I&apos;m currently working as a Lead Mobile Engineer at <Link href={'https://www.bolster.co/'}>Bolster</Link>,
        helping the team to shape beautiful and functional products. <br /> <br />I absolutely love collecting and
        listening to music, and I’m always carrying a film camera with me to snap some pictures.
      </p>
    </>
  )
}
