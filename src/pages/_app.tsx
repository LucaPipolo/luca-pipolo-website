import type { AppProps } from 'next/app'

import SanityApolloProvider from '../graphql/sanity-provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SanityApolloProvider>
      <Component {...pageProps} />
    </SanityApolloProvider>
  )
}
