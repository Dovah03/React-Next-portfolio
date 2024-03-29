import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Main, NextScript, Head } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="Mehdi Aguendich's Portfolio"
            content="Welcome to my portfolio website where I show case teh different project I have worked on throughout the years"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
