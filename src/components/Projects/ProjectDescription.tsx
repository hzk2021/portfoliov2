import { Center, Flex, Text } from "@chakra-ui/react"
import HrefButton from "../HrefButton"

type descriptionProps = {
    icons : JSX.Element[],
    description: string,
    liveLink ?: string,
    sourceLink ?: string
}

function ProjectDescription({icons, description, liveLink, sourceLink} : descriptionProps) {
  return (
    <>
        <Center as={Flex} gap={2}>
            {icons.map((icon => {
                return <span style={{width: '2rem'}}>{icon}</span>
            }))}
        </Center>

        <Text fontSize={["0.8rem", "0.9rem", "1rem"]}>{description}</Text>

        <Flex justifyContent="center" gap={5}>
        {liveLink && <HrefButton text="Live Demo" link={liveLink}/>}
        {sourceLink && <HrefButton text="Source" link={sourceLink}/>}
    </Flex>
    </>
  )
}

export default ProjectDescription