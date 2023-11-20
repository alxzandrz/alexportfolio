import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoBehance } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Motion Designer based in Armenia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alex Andreasyan
          </Heading>
          <p>Digital Craftsman ( Motion Designer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello, my name is Alex, and I'm a motion designer based in Yerevan. 
          I have extensive experience in the field, with skills that encompass 
          creating dynamic and creative animations for digital products.
I am passionately involved in the visualization process, bringing ideas to life 
through motion. My professional journey includes diverse projects, ranging from 
planning and design to implementing solutions using cutting-edge technologies.
Currently, I am actively developing my portfolio and promoting my works. If you 
have any questions or are interested in collaboration, feel free to get in touch with me.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Yerevan, Armenia.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Bachelor degree in Journalism
          (Armenian State Institute of Physical Culture and Sport)

        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Hayasa films (Yerevan)
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Working at Cinema "Hayastan"
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working at Renderforest
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Playing guitar, Shooting, Gaming
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.behance.net/alxzandrz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoBehance />}
              >
                @alxzandrz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/alxzandrz/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @alxzandrz
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        </SimpleGrid>


        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://aleksandrandreasyan@gmail.com/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Send me an email
          </Button>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
