import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/devio';
  
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href={`${basePath}/_next/static/css/app.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 