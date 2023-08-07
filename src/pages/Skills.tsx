import { Box, Flex, Show } from "@chakra-ui/react"
import LanguageShowcase from "../components/Canvas/LanguageShowcase"
import WordWrapper from "../components/WordWrapper"

const introMessage = <span>
  Skills
  <br/>
  <br/>
</span>

const content = <span>
  <br/>
  Check out my skills!
</span>

function Skills() {
return (
    <Flex grow={1}>
      <Box flexGrow={1}>
        <WordWrapper 
          h1Text={introMessage}
          content={content}/>
      </Box>

      <Flex flexGrow={1}>
        <Show above="lg">
          <LanguageShowcase />
        </Show>
      </Flex>
    </Flex>
  )
}

export default Skills