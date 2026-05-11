import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const GatsbyStars = () => {
  const starsRef = useRef(null)

  useFrame((state, delta)=>{
    if(!starsRef.current) return

    const {mouse, camera} = state

    starsRef.current.rotation.x += delta * 0.02
    starsRef.current.rotation.y += delta * 0.04

    camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.03
    camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.03
  })

  return (
    <group ref={starsRef}>
      <Stars 
      radius={100}
      depth={80}
      count={7000}
      factor={5}
      saturation={0}
      fade
      speed={1}
      />
    </group>
  )
}

export default GatsbyStars