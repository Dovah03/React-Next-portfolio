import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Transition from '../../components/layouts/animatedLayout'
import { Meta, Title, ProjectImage } from '../title'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const project = () => (
  <Transition title="Isoqualtech">
    <Container>
      <Title>
        Mavis (Artificial Intelligence Assistant) <Badge>2022-</Badge>
      </Title>
      <Paragraph>
        Mavis is a Jarvis like AI Assistant using Google TTS (Text-To-Speech),
        STT (Speech-To-Text) API, OpenWeatherMap API and Wikipedia API ... To
        perform basic tasks like retrieve the weather in a city, display
        informations from a wiki page, open a folder or a webpage by only using
        voice recognition.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Souce Code</Meta>
          <Link href="https://github.com/Dovah03/Mavis-Assistant">
            https://github.com/Dovah03/Mavis-Assistant{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Google TTS, Google STT, OWM, Wiki API, Pyjokes</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/React-Next-portfolio/images/projects/Mavis.png"
        alt="AI-Assistant"
      />
      <ProjectImage
        src="/React-Next-portfolio/images/projects/Mavis_2.png"
        alt="AI-Assistant"
      />
    </Container>
  </Transition>
)

export default project
