import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import timelineImg from "../assets/timeline.png"

function Timeline() {
  return (
    <Box as={motion.div}
         initial={{x: -100}}
         animate={{x: 0}}
         w="550px">

        {timelineImg ? <Image src={timelineImg}/> : "Loading..." }
    </Box>
  )
}

export default Timeline