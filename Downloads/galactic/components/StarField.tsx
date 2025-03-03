"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import type * as THREE from "three"

const StarFieldInner = () => {
  const ref = useRef<THREE.Points>(null)

  const positions = React.useMemo(() => {
    const pos = new Float32Array(5000 * 3)
    return random.inSphere(pos, { radius: 1.5 }) as Float32Array
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3}>
        <PointMaterial transparent color="#ffffff" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function StarField() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <color attach="background" args={["#000000"]} />
      <StarFieldInner />
    </Canvas>
  )
}

