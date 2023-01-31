import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Main, NextScript} from 'next/document'
import Head from 'next/head' 
import theme from '../libs/theme'

export default class Document extends NextDocument {
    render () {
        return(
            <Html lang="en">
                <Head>
                <meta name="google-site-verification" content="EjTXcm6BPbchOljLdxPt7zXr3C-ePXee_D04WRyOfTU" />
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