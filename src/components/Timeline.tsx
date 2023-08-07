import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import timelineImg from "../assets/timeline.png"

function Timeline() {
  return (
    <Box as={motion.div}
         initial={{x: -100}}
         animate={{x: 0}}>
        <Image src={timelineImg}/>
    </Box>
  )
}

export default Timeline