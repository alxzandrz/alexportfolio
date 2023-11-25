import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="intros">
<Container>
      <Title>
        Intros <Badge>2022-2023-</Badge>
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
        <Center>Glowing Platinum Intro</Center>
      </Heading>

      <P style={{ marginLeft: '4px', marginTop: '10px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </P>
      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/827290698?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Distressed Glitch Intro</Center>
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
          src="//player.vimeo.com/video/836194904?title=0&byline=0&portrait=0&transparent=0"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Illuminated Circles Intro</Center>
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
          src="//player.vimeo.com/video/853725475?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Glowing Shapes Intro</Center>
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
          src="//player.vimeo.com/video/843864800?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>80s Retro Opener</Center>
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
          src="//player.vimeo.com/video/832249479?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Clean Forming Logo Reveal</Center>
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
          src="//player.vimeo.com/video/799851818?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Hi-Tech Neon Opener</Center>
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
          src="//player.vimeo.com/video/722092963?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Retrowave Glowing Logo</Center>
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
          src="//player.vimeo.com/video/768924765?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>inimal Logo Opener</Center>
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
          src="///player.vimeo.com/video/750293791?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Colorful Search Tab Intro</Center>
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
          src="//player.vimeo.com/video/716677049?title=0&byline=0&portrait=0&transparent=0"
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
