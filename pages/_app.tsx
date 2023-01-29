import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
        <Component {...pageProps}></Component>
      </div>
  )
}

export default MyApp
