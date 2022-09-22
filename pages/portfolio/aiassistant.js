import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Transition from "../../components/layouts/animatedLayout";
import { Meta, Title, ProjectImage } from "../title";
import Paragraph from "../../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons";

const project = () => (
    <Transition title="Isoqualtech">
        <Container>
            <Title>
                Jarvis like AI Assistant <Badge>2022-</Badge>
            </Title>
            <Paragraph>
                Jarvis like AI Assistant using Google TTS (Text-To-Speech) and STT (Speech-To-Text) API.

            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Progress</Meta>
                    <span>Work in Progress...</span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Google TTS, Google STT</span>
                </ListItem>
            </List>
            <ProjectImage src="/images/works/inkdrop_01.png" alt="AI-Assistant" />
            <ProjectImage src="/images/works/inkdrop_02.png" alt="AI-Assistant" />
        </Container>
    </Transition>
)

export default project
