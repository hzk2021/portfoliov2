import { Html } from "@react-three/drei"
import { MeshProps, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { icons } from "../Misc/icons"
import * as THREE from "three"
import { Icons } from "../../enums/Icons"

interface tagProps extends MeshProps {
    IconSvg : JSX.Element
    text: string,
    textColor: string
}

function Tag({text, IconSvg, textColor, ...props} : tagProps) {
    return (
      <mesh {...props}>
        <meshStandardMaterial roughness={0.75} emissive="#404057"/>
          <Html distanceFactor={15}>
            <div style={{
                color: `${textColor}`,
                cursor: 'grab',
                userSelect: 'none',
                fontFamily: "Poppins",
            }}>
                {IconSvg}
                <span>{text}</span>
            </div>
          </Html>
      </mesh>
    )
}

function RotatingTags() {

  const ref = useRef<THREE.Group>(null!)

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))

  return (
    <group ref={ref}>
        <Tag position={[-2, 0, 0]} text="React" textColor="#61DAFB" IconSvg={icons[Icons.React]}/>
        <Tag position={[0, -2, -3]} text="NextJS" textColor="white" IconSvg={icons[Icons.ExpressJS]}/>
        <Tag position={[2, 0, 0]} text="C#" textColor="#239120" IconSvg={icons[Icons.CSharp]}/>
        <Tag position={[-2, 1, 3]} text="Python" textColor="#3776AB" IconSvg={icons[Icons.Python]}/>
        <meshStandardMaterial/>
    </group>
  )
}

export default RotatingTags