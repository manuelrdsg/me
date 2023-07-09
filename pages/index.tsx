import { Post } from 'models/PostModel'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import Layout from 'components/Layout'

import { getSortedPostsData } from 'lib/posts'

const profPic = require('styles/test.jpg')

const Home = ({ allPostsData }: { allPostsData: Post[] }) => {
  return (
    <Layout>
      <div className={'flex-1 flex flex-col items-stretch justify-center'}>
        <div className={'block mx-o w-full md:grid md:grid-cols-2 md:gap-[3.5rem] md:place-content-center'}>
          <div className={'max-w-xl mx-auto md:mx-0 h-72 md:h-full max-h-[681px] self-center'}>
            <div
              className={
                'border rounded-3xl border-dark-primary block relative overflow-hidden z-1 inset-0 object-center h-full w-full'
              }>
              <Image className={'z-0 absolute inset-0 object-cover'} fill src={profPic} alt={'profPic'} />
            </div>
          </div>
          <div
            className={
              'max-w-xl mx-auto md:mx-0 py-[--grid-gap] md:py-[calc(var(--grid-gap)+theme(spacing.12))] md:self-center'
            }>
            <h1 className={'text-5xl font-bold'}>Hola.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor tortor sit amet sem rhoncus, ut
              commodo mauris pharetra. Quisque at dolor arcu. Phasellus aliquam ante vitae convallis accumsan.
              Pellentesque et turpis diam. Duis varius ullamcorper urna, placerat efficitur ex eleifend et. Morbi
              molestie faucibus nulla, eu consequat ante hendrerit vel. Ut tempus lectus maximus nibh maximus, a
              consequat orci consectetur. Fusce nec odio lobortis, pretium enim vel, volutpat orci. Fusce sapien risus,
              faucibus vel commodo vel, condimentum vel tortor. Duis feugiat imperdiet lacus vel aliquet. Sed tristique
              sollicitudin augue nec dapibus. Aliquam mollis lacinia posuere. Aliquam non ante eu nisl volutpat pulvinar
              in ac mi. Ut eget diam a metus semper gravida. Duis mi mi, vehicula ac massa at, rutrum accumsan tortor.
              Aenean ut pulvinar nisi. Vivamus nec eros ex. Quisque ut efficitur dolor. Integer tristique leo id magna
              dictum, in euismod dui sollicitudin. Etiam ultricies lacinia rutrum. Quisque volutpat neque sit amet
              commodo molestie. Nam mattis augue ut diam interdum imperdiet. Proin molestie urna sit amet purus
              suscipit, in maximus lectus tempor. Donec fermentum convallis lacus ac porttitor. Curabitur lacus orci,
              convallis sed nibh vitae, cursus ultricies lacus. Integer augue ipsum, mattis eu est id, consequat
              accumsan augue.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
