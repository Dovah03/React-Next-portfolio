import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Transition from "../../components/layouts/animatedLayout";
import { Meta, Title, ProjectImage } from "../title";
import Paragraph from "../../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons";

const project = () => (
    <Transition title="Three.js Website">
        <Container>
            <Title>
                THREE.js Portfolio website <Badge>2022</Badge>
            </Title>
            <Paragraph>
                An Animated Portfolio website made using Three.js library and Vite.js
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href = "https://dovah03.github.io/">
                    https://dovah03.github.io/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/IOS/Android (Web Browser)</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML, CSS, JavaScript, Three.js, Github Pages</span>
                </ListItem>
                <ListItem mb={10}>
                    <Meta>Deployement</Meta>
                    <span>Vite.js, Github pages</span>
                </ListItem>
            </List>
            <ProjectImage src="/images/projects/portfolio_01.png" alt="Portfolio website" />
            <ProjectImage src="/images/projects/portfolio_02.png" alt="Portfolio website" />
        </Container>
    </Transition>
)

export default project
