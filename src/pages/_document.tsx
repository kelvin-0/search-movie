import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Search Upcoming, Popular, and Top Rated movies"
        />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
