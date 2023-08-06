import { Container, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

type wrapperProps = {
  h1Text ?: string,
  content ?: string | JSX.Element | ReactNode
}

export default function Wrapper(props : wrapperProps) {
  return (
    <Container 
      color='white'
      _before={{
        content: '"<section>"',
        display: 'block',
        marginBottom: "2em",
        color: "#515152",
        fontFamily: "La Belle Aurore, cursive",
        fontWeight: "bold",
        fontSize: "1.4rem"

      }}
      _after={{
        content: '"</section>"',
        display: 'block',
        marginTop: "2em",
        color: "#515152",
        fontFamily: "La Belle Aurore, cursive",
        fontWeight: "bold",
        fontSize: "1.4rem"
      }}>


      <Text fontSize='5xl' 
            fontWeight='bold'
            _before={{
              content: '"<h1>"',
              display: 'block',
              marginTop: "2em",
              color: "#515152",
              fontFamily: "La Belle Aurore, cursive",
              fontWeight: "bold",
              fontSize: "1.4rem"
            }}
            _after={{
              content: '"</h1>"',
              display: 'block',
              marginTop: "2em",
              color: "#515152",
              fontFamily: "La Belle Aurore, cursive",
              fontWeight: "bold",
              fontSize: "1.4rem"
            }}>

            {props.h1Text}
      </Text>

      <Text>
          {props.content}
      </Text>

    </Container>
  )
}
