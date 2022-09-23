import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Transition from "../../components/layouts/animatedLayout";
import { Meta, Title, ProjectImage } from "../title";
import Paragraph from "../../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons";
const project = () => (
    <Transition title="opencvapp">
        <Container>
            <Title>
                OpenCV Drowsiness Detection App <Badge>2021</Badge>
            </Title>
            <Paragraph>
                A AI Python Application for detecting Drowsiness 
                in Car Drivers and trigger an alarm to wake the driver up, 
                by training a model using CNN and HAAR cascade files
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href = "https://github.com/Dovah03/Drowsiness-detection">
                    https://github.com/Dovah03/Drowsiness-detection <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Keras, Numpy, Panda, OpenCV, Tensorflow</span>
                </ListItem>
            </List>
            <ProjectImage src="/React-Next-portfolio/images/works/DDS_01.png" alt="Drowsiness Detection System" />
            <ProjectImage src="/React-Next-portfolio/images/works/DDS_02.png" alt="Drowsiness Detection System" />
        </Container>
    </Transition>
)

export default project
