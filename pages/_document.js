import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            id="CUSTOM SCRIPTTT"
            type="text/javascript"
            src="https://s.skimresources.com/js/200910X1679342.skimlinks.js" ></Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument