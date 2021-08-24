import React, { Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Box as Cube, Sphere, useAspect, OrbitControls } from "@react-three/drei";
import { Flex, Box } from "@react-three/flex";

const colors = [0xff7171, 0xffaa71, 0xff4b5c];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Orb = () => {
    return (
        <Box centerAnchor margin={1}>
            {(width) => (
                <Sphere args={[2, 16, 16]}>
                    <meshLambertMaterial
                        attach="material"
                        color={colors[getRndInteger(0, 2)]}
                    />
                </Sphere>
            )}
        </Box>
    );
};

function Layout() {
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect(size.width, size.height);

    console.log(size.width / 10)
    console.log(vpWidth)

    return <group position={[-(vpWidth / 2) + 1, vpHeight / 2, 0]} rotation={[0, 0, 0]}>
        <Flex
            flexDirection="row"
            size={[vpWidth, vpHeight, 0]}
            wrap="wrap"
            centerAnchor
        >
            {[...Array(50).keys()].map((obj) => (
                <Orb key={obj} />
            ))}
        </Flex>
    </group>
}

function Display_shops() {
    const ref = useRef();

    return <div id="viewShops">
        <Canvas orthographic shadows dpr={[1, 2]} camera={{ zoom: 35, position: [0, 0, 250] }}>
            <Layout />
            {/* Limiting the viewing is how we will let people view shops */}
            <OrbitControls ref={ref} enableZoom={false} enablePan={true} enableRotate={false}/>
        </Canvas>
    </div>
}

export default Display_shops