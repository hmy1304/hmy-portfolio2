import React, {useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber'

const Box = ({scale = 1, ...props}) => {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta)=>{
    if(meshRef.current) {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh
    {...props}
    ref={meshRef}
    scale={active ? scale * 1.5 : scale}
    onClick={()=>setActive(!active)}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
        {/* <torusKnotGeometry args={[1, 0.32, 120, 20]}/> */}
        {/* <boxGeometry args={[2, 2, 2]}/> */}
        {/* <sphereGeometry args={[1.5, 32, 32]}/> */}
        {/* <torusGeometry args={[1.2, 0.35, 16, 100]}/> */}
        {/* <coneGeometry args={[1.2, 2.2, 32]}/> */}
        {/* <cylinderGeometry args={[1, 1, 2.2, 32]}/> */}
        {/* <octahedronGeometry args={[1.6, 0]}/> */}
        {/* <dodecahedronGeometry args={[1.5, 0]}/> */}
        {/* <tetrahedronGeometry args={[1.7, 0]}/> */}
        {/* <planeGeometry args={[3, 2]}/> */}
        <ringGeometry args={[0.8, 1.5, 64]}/>
        {/* <capsuleGeometry args={[0.8, 1.6, 8, 32]}/> */}
        <meshStandardMaterial 
        color={hovered ? "#00f5ff" : "#b388ff"} 
        emissive={hovered ? "#00f5ff" : "##5b2cff"}
        emissiveIntensity={0.5}
        wireframe
        />
    </mesh>
  )
}

export default Box