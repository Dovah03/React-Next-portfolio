import Link from "next/link"
import { Box, Heading, Text, Container, Button } from "@chakra-ui/react"

const page404 = () => {
    return (
        <Container>
            <Heading as="h1">Error 404: Page Not Found</Heading>
                <Text>The page you&apos;re looking for does not exist.</Text>
                        <Box my={6}>
                            <Link href="/">
                                <Button>Go Back</Button>
                            </Link>
                        </Box>
        </Container>
    )
}

export default page404;