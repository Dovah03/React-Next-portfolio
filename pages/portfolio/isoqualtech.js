import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Transition from "../../components/layouts/animatedLayout";
import { Meta, Title, ProjectImage } from "../title";
import Paragraph from "../../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons";
const project = () => (
    <Transition title="Isoqualtech">
        <Container>
            <Title>
                Angular-Spring-boot-App<Badge>2021</Badge>
            </Title>
            <Paragraph>
                A CRUD WebApp for commercial database management with
                e-mail sending and document downloading features (.xls,.pdf).
                using REST-API, Angular 12, Spring-boot, Spring Security, JWT, PDF.JS,
                Exceljs.js, MongoDB and MySQL.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href = "https://angular-crud-app-demo.herokuapp.com/">
                    https://angular-crud-app-demo.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                    </Link> <br/>
                    <span>(To login using Demo Accounts please check README.md in either the Front-End or Back-End Github repository)</span>
                </ListItem>
                <ListItem>
                    <Meta>Front-End Source Code</Meta>
                    <Link href = "https://github.com/Dovah03/Angular-Crud-App">
                    https://github.com/Dovah03/Angular-Crud-App <ExternalLinkIcon mx="2px" /> <br/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Back-End Source Code</Meta>
                    <Link href = "https://github.com/Dovah03/palteforme-demo-api">
                    https://github.com/Dovah03/palteforme-demo-api <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/IOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Spring, Angular 12, JWT, Exceljs.js, PDF.JS MongoDB, MySQL</span>
                </ListItem>
                <ListItem mb={10}>
                    <Meta>Deployement</Meta>
                    <span>Heroku, PostgreSQL, MongoDB Atlas</span>
                </ListItem>
            </List>
            <ProjectImage src="/React-Next-portfolio/images/projects/isoqualtechapp_02.png" alt="Spring-Angular-App" />
            <ProjectImage src="/React-Next-portfolio/images/projects/isoqualtechapp_01.png" alt="Spring-Angular-App" />
        </Container>
    </Transition>
)

export default project
