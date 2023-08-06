import { Box, Button } from "@chakra-ui/react";
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

  <Box mt={5}>
    <Button w={'100%'}>Website</Button>
  </Box>
</span>

function Home() {
  
  return (
    <WordWrapper 
      h1Text={introMessage}
      content={content}/>
  )
}

export default Home;