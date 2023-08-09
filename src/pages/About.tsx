import { Box, Center, Flex, Hide } from "@chakra-ui/react";
import Timeline from "../components/Timeline";
import WordWrapper from "../components/WordWrapper";

const introMessage = <span>
    About Me
</span>

const content = <span>
I have been in touch with Information Technology since I enrolled at Nanyang Polytechnic in 2020, and 
I have been building various projects for all kinds of platforms since then.
<br/>
<br/>
I recently received my Diploma in Information Technology and my passion for the field has 
propelled me to continuously explore and study emerging technologies. 
<br/>
<br/>
My goal is to enhance 
my skills and advance my career in this everchanging industry.
</span>

function About() {
  
  return (
    <Flex grow={1}>
      <Box flexGrow={1}>
        <WordWrapper 
          h1Text={introMessage}
          content={content}/>
      </Box>

      <Center flexGrow={1} mb={2}>
        <Hide below="lg">
          <Timeline/>
        </Hide>
      </Center>
    </Flex>
  )
}

export default About;