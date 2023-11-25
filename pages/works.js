import { Container, Heading, SimpleGrid, /*Divider*/} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbReels from '../public/images/works/Reels_thumb.jpg'
import thumbIntros from '../public/images/works/intros.webp'
import thumbopeners from '../public/images/works/openers.webp'
import thumbAnimations from '../public/images/works/Animations.webp'
import thumbTitlepacks from '../public/images/works/Titlepacks.webp'
{/* import thumbModeTokyo from '../public/images/works/no_img.png'
import thumbStyly from '../public/images/works/no_img.png'
import thumbPichu2 from '../public/images/works/no_img.png'
import thumbFreeDBTagger from '../public/images/works/no_img.png'
import thumbAmembo from '../public/images/works/no_img.png' */}

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="reels" 
          title="Reels" thumbnail={thumbReels}>
          A collection of creative animations for Renderforest, 
          enhancing the creation of unique and engaging content for Instagram Reels, Stories, and other posts
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="intros"
            title="Intros"
            thumbnail={thumbIntros}
          >
             Unique animations complementing the creation of engaging content for intros and logo animations, 
             suitable for various platforms, including digital media.
          </WorkGridItem>
        </Section>

      <Section delay={0.1}>
          <WorkGridItem
            id="openers"
            title="Openers"
            thumbnail={thumbopeners}
          >
             Openers and Trailers, inspiring the creation of captivating content.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="animations" 
          thumbnail={thumbAnimations} title="Animations">
          Scene animations, crafted by talented illustrators, 
          inspire the creation of captivating content.
          </WorkGridItem>
        </Section>
      </SimpleGrid>


      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="titlepacks" 
          thumbnail={thumbTitlepacks} title="Title Pack&apos;s">
         Title Packs, meticulously designed by skilled artists,
         elevate the visual appeal of your content, sparking creativity and engagement.
          </WorkGridItem>
        </Section>
       {/* <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Title"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Title">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2"
          thumbnail={thumbPichu2} title="Title">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Title"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Title">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </WorkGridItem>
</Section> */}
        
        
      </SimpleGrid> 
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
