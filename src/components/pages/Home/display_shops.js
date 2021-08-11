import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Flex, Box } from "@react-three/flex";
import { Box as Cube, Sphere, useAspect } from "@react-three/drei";
import * as THREE from "three";

const state = {
    top: 0,
    pages: 3
};

function Store(props) {
    const [active, setActive] = useState(false)
    const ref = useRef()

    useFrame((state, delta) => {
        if (active) {
            ref.current.rotation.y += 0.01
        }
    })

    return <Sphere args={[1, 16, 16]}>
        <meshLambertMaterial attach="material" color={props.color ? props.color : 'black'} />
    </Sphere>
}

function StoreBall(props) {
    return <Box>
        <Store color={props.color} />
    </Box>
}



class Display_shops extends React.Component {
    render() {
        return <Canvas shadows={true}>
            <hemisphereLight intensity={1} />
            <directionalLight intensity={0.5} />

            <Flex size={[300, 300, 300]} flexDirection="row" flexWrap="wrap">
                <StoreBall color={'blue'} />
                <StoreBall color={'red'} />
                <StoreBall color={'yellow'} />
                <StoreBall color={'green'} />
                <StoreBall color={'purple'} />

            </Flex>
        </Canvas>
    }
}

export default Display_shops