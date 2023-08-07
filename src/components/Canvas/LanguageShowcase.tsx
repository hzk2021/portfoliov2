// import { Box } from '@chakra-ui/react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import RotatingTags from './RotatingTags'

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud"

function LanguageShowcase() {
  return (

    <TagCloud
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
    })}
    // onClick={(tag: string) => alert(tag)}
    onClickOptions={{ passive: true }}
    >

    {[
        "VSCode",
        "TypeScript",
        "React",
        "Preact",
        "Parcel",
        "Jest",
        "Next",
        "ESLint",
        "Framer Motion",
        "Three.js",
    ]}
</TagCloud>
  )
}

export default LanguageShowcase