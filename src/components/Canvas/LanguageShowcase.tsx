// import { Box } from '@chakra-ui/react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import RotatingTags from './RotatingTags'

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud"

function goToURL(url : string) {
  window.open(url, '_blank')?.focus();
}

function LanguageShowcase() {
  return (

    <TagCloud
    className="hii"
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "normal",
    })}
    onClick={(tag: string) => {
      switch (tag) {
        case "VSCODE":
          goToURL("https://www.google.com");
          break;
      
        default:
          break;
      }
    }}
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