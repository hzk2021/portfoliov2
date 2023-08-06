import { Box, Button, Center, Flex, Show } from "@chakra-ui/react";
import ProfileIcon from "../components/Sidebar/ProfileIcon";
import WordWrapper from "../components/WordWrapper";

const introMessage = <span>
  Hi,
  <br/>
  I'm Zhenkai,
  <br/>
  An Aspiring Developer
  <br/>
</span>

const content = <span>
  I love programming! JavaScript & .NET Developer | CarrySharp
  <br/>
  Check out my portfolio!

  <span style={{display: "block", marginTop: 10}}>
    <Button w={'100%'}>Website</Button>
  </span>
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
          <Box w={"10rem"} 
            transition="all 0.5s"
            _hover={{
              transform: 'scale(1.2)',
            }}>
            <ProfileIcon/>
          </Box>
        </Show>
      </Center>
    </Flex>
  )
}

export default Home;