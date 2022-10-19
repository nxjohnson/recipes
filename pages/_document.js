import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@600&family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/jtg8qhu.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
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