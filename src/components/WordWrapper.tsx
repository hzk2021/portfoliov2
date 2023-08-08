import { Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { motion } from "framer-motion"

type wrapperProps = {
  h1Text ?: string | JSX.Element | ReactNode,
  content ?: string | JSX.Element | ReactNode
}

export default function WordWrapper(props : wrapperProps) {
  return (
    <Box
      as={motion.div}
      initial={{scale: 0}}
      animate={{scale: 1}}
      color='white'
      _before={{
        content: '"<section>"',
        display: 'block',
        marginBottom: "2em",
        color: "#515152",
        fontFamily: "La Belle Aurore, cursive",
        fontSize: ["1.3rem","1.5rem"],
        fontWeight: "bold",
        fontStyle: 'italic',

      }}
      _after={{
        content: '"</section>"',
        display: 'block',
        marginTop: "2em",
        color: "#515152",
        fontFamily: "La Belle Aurore, cursive",
        fontSize: ["1.3rem","1.5rem"],
        fontWeight: "bold",
        fontStyle: 'italic',

      }}>


      <Text fontSize={['2rem', '2rem', '2.5rem']} 
            fontWeight='bold'

            _before={{
              content: '"<h1>"',
              display: 'block',
              color: "#515152",
              fontFamily: "'La Belle Aurore', cursive",
              fontStyle: 'italic',
              fontWeight: "bold",
              fontSize: ["1.2rem","1.4rem"],
            }}
            _after={{
              content: '"</h1>"',
              display: 'block',
              color: "#515152",
              fontFamily: "'La Belle Aurore', cursive",
              fontWeight: "bold",
              fontStyle: 'italic',
              fontSize: ["1.2rem","1.4rem"],
            }}>

            {props.h1Text}
      </Text>

      <Text fontSize={['0.8rem','1rem', '1rem']} 
            fontWeight='medium'
            w={['71%']}>
            {props.content}
      </Text>

    </Box>
  )
}
