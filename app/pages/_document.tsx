import * as React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

import globalStyles from '~/styles/index.less'

// tslint:disable-next-line:no-class
export default class MyDocument extends Document {
  public render(): JSX.Element {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>owl</title>
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          {styleTags}
        </Head>
        <body>
          {main}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js" />
          <NextScript />
        </body>
      </html>
    )
  }
}
