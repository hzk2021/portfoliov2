import { Box, Center, Tooltip, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import ProjectModal from './ProjectModal';

interface projectItemProp {
    icon: JSX.Element,
    name: string
    bgColour ?: string,
    tipLabel : string,
    pcImgSrc ?: string,
    mobileImgSrc ?: string,
    techIcons : JSX.Element[],
    description: string,
    liveLink: string,
    sourceLink: string
}

function ProjectItem({icon, name, bgColour, tipLabel, pcImgSrc, mobileImgSrc, techIcons ,description, liveLink, sourceLink} : projectItemProp) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Tooltip hasArrow placement='top' label={tipLabel} bg="#eaeaea" textColor="black" textAlign="center">
      <Box 
          onClick={onOpen}
          w="100%"
          maxW={"150px"}
          p={2}
          as={motion.div}
          whileHover={{scale: 1.2}}
          bg={bgColour}
          cursor="pointer">
          {icon}

          <Center color='white' textAlign="center" mt={2} fontSize={["0.8rem", "0.9rem", "1rem"]}>{name}</Center>
      </Box>
    </Tooltip>

    <ProjectModal isOpen={isOpen} 
                  onClose={onClose} 
                  projectName={name} 
                  pcImgSrc={pcImgSrc} 
                  mobileImgSrc={mobileImgSrc}
                  description={description}
                  liveLink={liveLink}
                  sourceLink={sourceLink}
                  techIcons={techIcons}/>
    </>
  )
}

export default ProjectItem