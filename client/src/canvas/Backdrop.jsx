import { useRef } from "react"
// import { easing } from "maath"
// import { useFrame } from "@react-three/fiber"
import { AccumulativeShadows,RandomizedLight } from "@react-three/drei"

const Backdrop = () => {

    const shadows = useRef();
    return (
        <AccumulativeShadows
            ref={shadows}
            position={[0,0,-0.14]}
            temporal
            frames={60}
            alphaTest={0.8}
            scale={10}
            rotation={[Math.PI / 2, 0 , 0]}
            
        >
            <RandomizedLight 
                amount={4}
                radius={9}
                intensity={0.55}
                ambient={0.25}
                position={[ 5, 4, -10]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop