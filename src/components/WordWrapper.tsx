import { Container, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

type wrapperProps = {
  h1Text ?: string | JSX.Element | ReactNode,
  content ?: string | JSX.Element | ReactNode
}

export default function Wrapper(props : wrapperProps) {
  return (
    <Container 
      fontFamily="Poppins, var(--chakra-fonts-body)"
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


      <Text fontSize={['2rem', '2.5rem']} 
            fontWeight='extrabold'

            _before={{
              content: '"<h1>"',
              display: 'block',
              color: "#515152",
              fontFamily: "La Belle Aurore, cursive",
              fontWeight: "bold",
              fontSize: "1.4rem"
            }}
            _after={{
              content: '"</h1>"',
              display: 'block',
              color: "#515152",
              fontFamily: "La Belle Aurore, cursive",
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}>

            {props.h1Text}
      </Text>

      <Text fontSize={['0.9rem', '1rem']} 
            fontWeight='medium'
            fontFamily="Poppins, var(--chakra-fonts-body)">
            {props.content}
      </Text>

    </Container>
  )
}
