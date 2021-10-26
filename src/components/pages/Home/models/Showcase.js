import React, { useEffect, useRef, useState } from 'react';

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Flex, Box } from '@react-three/flex'




function Wall() {
    return (
        <mesh receiveShadow position-z={-2.5}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshPhysicalMaterial attach="material" color="#262626" />
        </mesh>
    )
}

function Floor() {
    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-2.5}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshPhysicalMaterial attach="material" color="#616161" />
        </mesh>
    )
}

function Model(props) {
    const [active, setActive] = useState(false)
    const ref = useRef()

    useFrame((state, delta) => {
        if (active) {
            ref.current.rotation.y += 0.01
        }
        else {
            ref.current.rotation.y += 0.001
        }
    })

    return <mesh receiveShadow castShadow ref={ref}
        onPointerEnter={() => {
            setActive(true)
        }}
        onPointerLeave={() => {
            setActive(false)
        }}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={props.color} />
        <Light active={active} />
    </mesh>
}

function Light(props) {
    const ref = useRef()

    useFrame(() => {
        if (ref.current) {
            console.log("tester")
        }
    })

    if (props.active) {
        return <spotLight intensity={.4} castShadow ref={ref} penumbra={1}/>
    }
    return null
}

function ModelBox(props) {
    return <Box centerAnchor flexGrow={1} margin={1}>
        <Model color={props.color} />
    </Box>
}


class Showcase extends React.Component {
    render() {
        return <Canvas shadows={true} shadowMap >
            <color attach="background" args={"#141414"} />
            <OrbitControls />

            <hemisphereLight intensity={1} />
            <spotLight position={[0, 2, 35]} angle={0.3} penumbra={1} intensity={.8} castShadow />

            <Flex justifyContent="center" alignItems="center" flexDirection="row" position={[-.5, .5, 0]}>
                <ModelBox color={'blue'} />
            </Flex>

            <Floor />
            <Wall />
        </Canvas>
    }
}

export default Showcase;
