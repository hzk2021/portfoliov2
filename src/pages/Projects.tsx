import { Box, Flex } from "@chakra-ui/react";
import WordWrapper from "../components/WordWrapper";
import ProjectsDisplay from "../components/Projects/Projects";

const introMessage = <span>
    Portfolio
</span>

function Projects() {
  
  return (
    <Flex grow={1}>
      <Box flexGrow={1}>
        <WordWrapper 
          h1Text={introMessage}
          content={<ProjectsDisplay />}/>
      </Box>

    </Flex>

    
  )
}

export default Projects;