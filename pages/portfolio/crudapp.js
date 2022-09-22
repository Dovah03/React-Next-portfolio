import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Transition from "../../components/layouts/animatedLayout";
import { Meta, Title, ProjectImage } from "../title";
import Paragraph from "../../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons";

const project = () => (
    <Transition title="CrudApp">
        <Container>
            <Title>
                Database Management App <Badge>2020</Badge>
            </Title>
            <Paragraph>
                An internal customisable database management app for small businesses.  
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href = "https://github.com/Dovah03/SwingApp">
                        https://www.github.com/Dovah03/SwingApp/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/ (Java wrapped APP)</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, Java Swing, MS Access, Java Wrapper</span>
                </ListItem>
            </List>
            <ProjectImage src="images/projects/crudapp_01.png" alt="Java Swing Crud App" />
            <ProjectImage src="images/projects/crudapp_02.png" alt="Java Swing Crud App" />
        </Container>
    </Transition>
)

export default project
