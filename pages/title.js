import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link"

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/portfolio">
            <Link>Portfolio</Link>
        </NextLink>
        <span>
            {' '}
            <ChevronRightIcon />
            {' '}
        </span>
        <Heading display="inline-block" as="h3" fontsize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const ProjectImage = ({ src, alt}) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={8} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

export default Title