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
  <Layout title="Animations">
    <Container>
      <Title>
        Reels <Badge>2022-2023-</Badge>
      </Title>
      <P>
      Scene animations, crafted by talented illustrators, 
      inspire the creation of captivating content.
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
        <Center>Shabbat Shalom Animations</Center>
      </Heading>

      <P style={{ marginLeft: '4px', marginTop: '10px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </P>
      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="//player.vimeo.com/video/746445758?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Anzac Day Animations</Center>
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
          src="//player.vimeo.com/video/808593756?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>St. Patrick&apos;s Day Animations</Center>
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
          src="//player.vimeo.com/video/807442188?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Bodhi Day Animations</Center>
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
          src="//player.vimeo.com/video/761072297?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Chinese New Year Greetings</Center>
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
          src="//player.vimeo.com/video/787477734?title=0&byline=0&portrait=0&transparent=0"
          title="Vimeo video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        
        
      </AspectRatio>

      <Heading as="h4" fontSize={20} my={6}>
        <Center>Nuzul Al-Quran Greetings</Center>
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
          src="//player.vimeo.com/video/813532315?title=0&byline=0&portrait=0&transparent=0"
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
