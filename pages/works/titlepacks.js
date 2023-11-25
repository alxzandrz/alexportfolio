import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  AspectRatio,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="reels">
    <Container>
      <Title>
        Reels <Badge>2022-2023-</Badge>
      </Title>
      <P>
      Title Packs, meticulously designed by skilled artists,
      elevate the visual appeal of your content, sparking creativity and engagement.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.renderforest.com/" target="_blank">
          https://www.renderforest.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Sowftware</Meta>
          <span>Adobe Illustrator / After Effects</span>
        </ListItem>
    
      </List>

       {/* <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
       {<WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />} */}

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Dynamic Stomp Titles Pack</Center>
      </Heading>

      <P style={{ marginLeft: '4px', marginTop: '10px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </P>
      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/763758217?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Clean Titles Animation Pack</Center>
      </Heading>

      <P style={{ marginLeft: '4px', marginTop: '10px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </P>
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.renderforest.com/" target="_blank">
          https://www.renderforest.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      
        
      </List>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/732085936?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Jolly Christmas Slideshow</Center>
      </Heading>

      <P style={{ marginLeft: '4px', marginTop: '10px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.renderforest.com/" target="_blank">
          https://www.renderforest.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/776088844?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
