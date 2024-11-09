import { TypographyProvider } from 'context'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <TypographyProvider>
        <Component {...pageProps} />
      </TypographyProvider>
    </ThemeProvider>
  )
}

export default App
