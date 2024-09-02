import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
