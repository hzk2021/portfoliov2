import { Box, Center, Flex, Show } from "@chakra-ui/react";
import ProfileIcon from "../components/Sidebar/ProfileIcon";
import WordWrapper from "../components/WordWrapper";

const introMessage = <span>
  Hi!
  <br/>
  I'm Zhenkai,
  <br/>
  An Aspiring Developer
  <br/>
</span>

const content = <span>
  Web & Software Developer | Tech Enthusiast
  <br/>
  <br/>
  Always looking to learn new technological trends!
</span>

function Home() {
  
  return (
    <Flex grow={1}>
      <Box flexGrow={1}>
        <WordWrapper 
          h1Text={introMessage}
          content={content}/>
      </Box>

      <Center flexGrow={1}>
        <Show above="lg">
        <ProfileIcon width={'10rem'}/>
        </Show>
      </Center>
    </Flex>
  )
}

export default Home;