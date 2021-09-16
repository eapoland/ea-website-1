import Document, { Html, Head, Main, NextScript } from 'next/document'

class EADocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="%PUBLIC_URL%/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="%PUBLIC_URL%/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="%PUBLIC_URL%/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="%PUBLIC_URL%/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="%PUBLIC_URL%/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="%PUBLIC_URL%/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="%PUBLIC_URL%/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="%PUBLIC_URL%/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="%PUBLIC_URL%/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="%PUBLIC_URL%/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="%PUBLIC_URL%/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="%PUBLIC_URL%/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="%PUBLIC_URL%/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="%PUBLIC_URL%/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Pomagaj efektywnie" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default EADocument
