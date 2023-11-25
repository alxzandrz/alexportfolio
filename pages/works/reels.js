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
      A collection of creative animations for Renderforest, 
      enhancing the creation of unique and engaging content for Instagram Reels, Stories, and other posts
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
        <ListItem>
          <Meta>Illustrator</Meta>
          <span>Vard Israyelyan </span>
          <Link href="https://www.behance.net/vard-israelyan" target="_blank" >
           Behance <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

       {/* <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
       {<WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />} */}

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Black Friday Reels</Center>
      </Heading>

      <P style={{ marginLeft: '4px', marginTop: '10px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </P>
      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://player.vimeo.com/video/884763915?h=04297e0a53&color=3271E6&title=0&byline=0&portrait=0s"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Thanksgiving Day Reels</Center>
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

        <ListItem>
          <Meta>Illustrator</Meta>
          <span>Vard Israyelyan </span>
          <Link href="https://www.behance.net/vard-israelyan" target="_blank" >
           Behance <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/755588951?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Thanksgiving Day Reels</Center>
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

        <ListItem>
          <Meta>Illustrator</Meta>
          <span>Vard Israyelyan </span>
          <Link href="https://www.behance.net/vard-israelyan" target="_blank" >
           Behance <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/751154406?title=0&byline=0&portrait=0&transparent=0"
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
