import { GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface projectItemProp {
    icon: JSX.Element,
    bgColour: string,
}

function ProjectItem({icon, bgColour} : projectItemProp) {
  return (
    <GridItem 
        w={200}
        p={2}
        aspectRatio={"4/3"}
        as={motion.div}
        initial={{x: -100}}
        animate={{x: 0}}
        whileHover={{scale: 1.2}}
        bg={bgColour}
        cursor="pointer">
        {icon}
        
    </GridItem>
  )
}

export default ProjectItem