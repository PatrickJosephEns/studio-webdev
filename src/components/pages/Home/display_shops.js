import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Flex, Box } from "@react-three/flex";
import { Box as Cube, Sphere, useAspect, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import './display_shops.css'

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

function Layout() {
    const group = useRef();
    const { size } = useThree();
    const [vpWidth] = useAspect("cover", size.width, size.height);
    const vec = new THREE.Vector3();

    console.log(vpWidth)

    // useFrame(() =>
    //     group.current.position.lerp(vec.set(-vpWidth / 2, state.top + 8, -10), 0.1)
    // );

    return <group ref={group} position={[0, 0, 0]}>
        <Flex size={[6, 0, 0]}
            flexDirection="row"
            wrap="wrap"
            centerAnchor
            justifyContent="center"
            alignItems="center">
            {[...Array(25).keys()].map(() => {
                return <StoreBall color={'blue'} />
            })}
        </Flex>
    </group>
}

class Display_shops extends React.Component {
    render() {
        return <div id="canvas">
            <Canvas shadows={true}>
                <OrbitControls />

                <hemisphereLight intensity={.4} />
                <directionalLight intensity={0.5} />

                <Layout />
            </Canvas>
        </div>
    }
}

export default Display_shops