import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/layout";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import thumbnailCrudapp from "../public/images/projects/crudapp.png"
import thumbnailIsoqualtech from "../public/images/projects/isoqualtechapp.png";
import thumbnailAI from "../public/images/projects/AI-assistant.png";
import thumbnailPortfolio from "../public/images/projects/portfolio.png";
import thumbnailDDS from "../public/images/projects/DDS.png";
import Transition from "../components/layouts/animatedLayout";

const portfolio = () => {
    return (
        <Transition>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Portfolio
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem id="portfolioWebsite" title="THREE.js Website" thumbnail={thumbnailPortfolio}>
                            Portfolio website made using THREE.JS
                        </WorkGridItem>
                        </Section>

                        <Section delay={0.4}>
                        
                        <WorkGridItem id="isoqualtech" title="Angular-Spring-Crud-App" thumbnail={thumbnailIsoqualtech}>
                            Web Solution for common commercial use cases and database management.

                        </WorkGridItem>
                        
                        </Section>

                        <Section delay={0.8}>

                        <WorkGridItem id="opencvapp" title="OpenCV D.D.S" thumbnail={thumbnailDDS}>
                            Python, Computer vision powered AI App for car drivers drowsiness detection.

                        </WorkGridItem>    
                    </Section>

                    <Section delay={0.8}>
                        <WorkGridItem id="crudapp" title="Database C.R.U.D App" thumbnail={thumbnailCrudapp}>
                            Java Swing CRUD Desktop App.

                        </WorkGridItem>
                    </Section>


                    <Section delay={1}>
                        <WorkGridItem id="aiassistant" title="Personal AI assisstant" thumbnail={thumbnailAI}>
                           J.A.R.V.I.S-Like AI assistant.

                        </WorkGridItem>
                    </Section>

                   

                </SimpleGrid>
                
            </Container>
        </Transition>    
        
    )
}

export default portfolio