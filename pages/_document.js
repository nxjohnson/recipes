import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@600&family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/jtg8qhu.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="menu-portal"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument