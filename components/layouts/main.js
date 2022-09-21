import Head from "next/head"
import Navbar from '../navbar.js'
import { Box , Container ,Divider} from '@chakra-ui/react'
import NoSsr from "../no-ssr.js"
import ThreeDModel from "../ThreeDModel.js"
import Footer from "../footer.js"
import Section from "../section.js"
import DiglettLoader from "../ThreeDLazyLoader"
import dynamic from "next/dynamic.js"

const DiglettModel = dynamic(() => import('../ThreeDModel'), {
    ssr: false,
    loading: () => <DiglettLoader />
  })

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Aguendich's portfolio website" />
            <meta name="author" content="Mehdi Aguendich" />
            <link rel="apple-touch-icon" href="Logo.png" />
            <link rel="shortcut icon" href="/favicon.ico?v=1" type="image/x-icon" />
            <meta property="og:site_name" content="Aguendich's Portfolio Website" />
            <meta property="og:type" content="website" />
            <title>Mehdi Aguendich - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14} >
            <DiglettModel/>
                {children}
                <Section >
                        <Divider my={6} />
                    </Section>
                <Footer/>
                
            </Container>
        </Box>
    )
}

export default Main