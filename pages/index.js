import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  useColorModeValue,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { motion } from 'framer-motion'
import Transition from '../components/layouts/animatedLayout'
import {
  IoLogoLinkedin,
  IoMail,
  IoLogoGithub,
  IoDocument
} from 'react-icons/io5'
//import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'

const Page = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('/React-Next-portfolio/images/Mehdi_CV_En.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Mehdi-Aguendich_Resume_En.pdf'
        alink.click()
      })
    })
  }
  return (
    <Transition>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          <div>Hello, I&apos;m a full-stack developer based in Morocco!</div>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mehdi Aguendich
            </Heading>
            <p>Software Engineer (Full-Stack Developer / AI Enthusiast)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/React-Next-portfolio/images/Profil-pic.jpg"
              alt="profil Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            📜 Get To Know Me
          </Heading>
          <Paragraph>
            Hi There! I'm Mehdi Aguendich, a Software Engineer, Full-Stack
            Developer, Computer Vision, Machine Learning enthousiast and open
            source contributor based in Morocco. I have been developing all
            sorts of applications for over 4 years now, and have recently
            created many Angular 12 based projects. Also I have worked in teams
            for various startups as either an Intern or a freelancer and helped
            them in launching their products/applications. and thus earned
            valuable learning experience.
            <br />I recently got my Engineering Degree at the Morrocan School of
            Engineering Sciences (E.M.S.I) and am currently working on
            developing and upgrading MAVIS my personal AI Assistant.
          </Paragraph>
          <br />

          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My Portfolio
                </Button>
              </motion.div>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            🚀 Projects
          </Heading>
          <Paragraph>
            {' '}
            - I’m currently working on my laptop 👨‍💻 or playing Elden Ring.
            <br /> <br />
            - I ❤️ Web Development using Angular 12, React.js and Next.js.
            <br /> <br />
            - I also ❤️ developing backend infrastructures using the Java
            Framework Spring for entreprises and Node.js (M.E.R.N) for small to
            medium projects. <br /> <br />
            - Currently working on improving my Data Structures and Algorithm
            skills👨‍💻 and getting better at Flutter.
            <br /> <br />
            - I love making Next.js Projects👨‍💻 using THREE.js the most.
            <br /> <br />
            - I have a huge interest in Machine Learning 🤖 and OpenCV 🌐 and so
            being good at Python is a must.
            <br /> <br />
            - I’m open for collaboration 🧠 on ANY kind of project.
            <br /> <br />
            - Fun fact: My quick-wittedness😎 lies in my laziness 😴.
            <br /> <br />
            - After visiting my Portfolio Website👨‍💻 do suggest me ways on how to
            improve it.
            <br /> <br />
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My Portfolio
                </Button>
              </motion.div>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            🌮 Work Experience
          </Heading>
          <BioSection>
            <BioYear>2023</BioYear>
            <strong>
              {' '}
              Urban Agency of Dakhla - Oued Eddahab : IT Engineer, (FULL-TIME){' '}
            </strong>{' '}
            - Urban Agency IT solutions developement and maintenance.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <strong>
              {' '}
              INOVAR : Pega System Architect, (FULL-TIME REMOTE){' '}
            </strong>{' '}
            - Software solution evolution and maintenance using PEGA System
            tools. Primarily PEGA AppStudio and PEGA DevStudio
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <strong>
              {' '}
              ASATECHNO CONSULTING : Software Engineer (FULL-TIME){' '}
            </strong>{' '}
            - Work environment preparation, Collaborative teamwork using a CI/CD
            tool, Insurance sector software solutions evolution and maintenance,
            and documentation writing of all tasks mentioned above.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            <strong>
              {' '}
              ISO QUAL TECH : Software Development Intern (E.S.P){' '}
            </strong>{' '}
            - Working on various tasks to develop and modify the existing system
            by creating useful APIs and integrating MongoDB and MySQL Databases
            using Angular11, Spring-boot and Spring-security.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            <strong> Diana's : Full-Stack Developer (Freelance gig) </strong> -
            Developed a Full-Fledged E-Shop website using Angular11 and Node.js.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            <strong>
              {' '}
              O.M.P.I.C : Full Stack Developer (Freelance gig){' '}
            </strong>{' '}
            - Creating and Developing a Java Swing desktop app for the team's
            internal use cases.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            <strong>
              {' '}
              the Commune of Salé : CMS Wordpress Developer Intern{' '}
            </strong>{' '}
            - Developing a dynamic website using Wordpress.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            What I <text style={{ color: 'red' }}>♥</text>
          </Heading>
          <Paragraph>
            I enjoy reading, listening to music and doing camping trips with
            friends among many other things.{' '}
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            📝 Contact Me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Dovah03" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Dovah03
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/elmehdi-aguendich/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @elmehdi-aguendich
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  mehdi_aguendich@protonmail.com
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Button
                onClick={onButtonClick}
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoDocument} />}
              >
                Download Resume
              </Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Transition>
  )
}

export default Page
