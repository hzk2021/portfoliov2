import { Box, Center, Flex, Hide } from "@chakra-ui/react";
import Timeline from "../components/Timeline";
import WordWrapper from "../components/WordWrapper";

const introMessage = <span>
    About Me
</span>

const content = <span>
I recently received my Diploma in Information Technology and my passion for the field has 
propelled me to continuously explore and study emerging technologies. My goal is to enhance 
my skills and advance my career in this everchanging industry.
<br/>
<br/>
I recently received my Diploma in Information Technology and my passion for the field has 
propelled me to continuously explore and study emerging technologies.
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