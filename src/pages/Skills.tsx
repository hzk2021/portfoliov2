import { Flex, Show } from "@chakra-ui/react"
import LanguageShowcase from "../components/Canvas/LanguageShowcase"
import WordWrapper from "../components/WordWrapper"

const introMessage = <span>
  Skills
</span>

const content = <span>
  I had been running a side hustle from 2020-2022, selling monthly subscriptions for a game helper.
  <br/>
  <br/>
  During my studies, I picked up a plethora of skills ranging from software development & problem solving to database management.
  <br/>
  <br/>
  In addition, I have been upskilling myself by learning new technologies and languages while job hunting. e.g. TypeScript, NextJS, Vite, etc.
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