import { TypographyProvider } from 'context'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

import 'styles/global.css'
import { DEFAULT_THEME } from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme={DEFAULT_THEME} attribute="class">
      <TypographyProvider>
        <Component {...pageProps} />
      </TypographyProvider>
    </ThemeProvider>
  )
}

export default App
