import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Northern Breeze</title>
        <meta name="description" content="Northern Breeze Software Development" />
        <meta property="og:title" content="Northern Breeze" />
        <meta property="og:description" content="Software Development, App Development and More" />
      </Head>
      <body>
        <Main />
        <GoogleAnalytics gaId="G-2SSW0QPMT7" />
        <NextScript />
      </body>
    </Html>
  )
}
