import { Html, Head, Main, NextScript } from 'next/document'

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
        <NextScript />
      </body>
    </Html>
  )
}
