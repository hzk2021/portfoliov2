import { Box } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import RotatingTags from './RotatingTags'

function LanguageShowcase() {
  return (
    <Box id="canvas-container" 
         h="100%">
        <Canvas camera={{position: [0, 0, 10]}}>
        <pointLight position={[10, 10, -10]} />
        <pointLight position={[-10, -10, 10]} />
        <RotatingTags/>
        <OrbitControls />
        </Canvas>
    </Box>
  )
}

export default LanguageShowcase