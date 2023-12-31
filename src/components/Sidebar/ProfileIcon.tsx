import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

function ProfileIcon({width} : {width: string | number}) {
  return (
    <Box w={width} 
        as={motion.div}
        initial={{x: -100}}
        animate={{x: 0}}
        whileHover={{scale: 1.2}}>
      <svg width="100%" height="100%" viewBox="0 0 80.8 70" xmlns="http://www.w3.org/2000/svg" > <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#00000000" strokeWidth="0.25mm" fill="#ff0854" style={{ stroke: "#00000000", strokeWidth: "0.25mm", fill: "#ff0854" }} > <path d="M 80.8 70 L 57.4 32.1 L 71.1 19.2 L 69.8 18 L 46.1 39.9 L 46.1 0 L 44.1 0 L 44.1 70 L 46.1 70 L 46.1 42.3 L 56 33.4 L 78.5 70 L 80.8 70 Z M 34.7 21.7 L 34.7 19.9 L 0.9 19.9 L 0.9 21.6 L 32.3 21.7 L 0 68.1 L 0 70 L 36.7 70 L 36.7 68.2 L 2.3 68.1 L 34.7 21.7 Z" vectorEffect="non-scaling-stroke" /> </g> </svg>

    </Box>
  )
}

export default ProfileIcon