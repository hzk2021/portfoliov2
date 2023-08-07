import { Box, Center, Flex, Show } from "@chakra-ui/react";
import Timeline from "../components/Timeline";
import WordWrapper from "../components/WordWrapper";

const introMessage = <span>
    About Me
</span>

const content = <span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo condimentum, iaculis quam sit amet, tincidunt ex. Integer euismod posuere massa, ultrices tincidunt purus.
  <br/>
  Check out my portfolio!

</span>

function About() {
  
  return (
    <Flex grow={1}>
      <Box flexGrow={1}>
        <WordWrapper 
          h1Text={introMessage}
          content={content}/>
      </Box>

      <Center flexGrow={1}>
        <Show above="lg">
          <Timeline/>
        </Show>
      </Center>
    </Flex>
  )
}

export default About;