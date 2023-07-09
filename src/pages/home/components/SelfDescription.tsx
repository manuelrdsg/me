import { Inter, Shrikhand } from 'next/font/google'

import Link from 'components/Link'

const shrikhand = Shrikhand({ weight: '400', subsets: ['latin'] })
const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] })

const SelfDescription = () => {
  return (
    <>
      <h1 className={`${shrikhand.className} text-4xl`}>hola.</h1>
      <p className={`${inter.className}`}>
        I&apos;m Manuel, a <span className={'italic'}>software engineer with a love for design</span>{' '}
        <span className={'font-bold'}>
          <del>living in Cádiz, Madrid</del> working from London.{' '}
        </span>
        I&apos;m currently working as a Senior Engineer at <Link href={'https://www.chase.co.uk/gb/en/'}>Chase UK</Link>
        , helping the team to shape a beautiful and functional app. <br /> <br />I absolutely love collecting and
        listening to music, and I’m always carrying a film camera with me to snap some pictures.
      </p>
    </>
  )
}

export default SelfDescription
