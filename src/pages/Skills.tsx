import { Flex, Show } from "@chakra-ui/react"
import LanguageShowcase from "../components/Canvas/LanguageShowcase"
import WordWrapper from "../components/WordWrapper"

const introMessage = <span>
  Skills
</span>

const content = <span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo condimentum, iaculis quam sit amet, tincidunt ex. Integer euismod posuere massa, ultrices tincidunt purus.
  <br/>
  Check out my portfolio!
</span>

function Skills() {
return (
    <Flex grow={1}>
      <Flex flexGrow={1} alignItems="center">
        <WordWrapper 
          h1Text={introMessage}
          content={content}/>
      </Flex>

      <Flex flexGrow={1} justifyContent="center" alignItems="center">
        <Show above="lg">
          <LanguageShowcase />
        </Show>
      </Flex>
    </Flex>
  )
}

export default Skills