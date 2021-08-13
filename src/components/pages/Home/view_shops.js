import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Stars, useGLTF } from "@react-three/drei";

import Model from './Model';
import IphoneModel from "./models/iphoneModel";

import { useSpring, animated, a } from '@react-spring/three'
import { Redirect } from "react-router-dom";

function ShowModel(props) {
    const [active, setActive] = useState(false);
    const model = useRef()

    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf')

    const { scale, rotation, positionX, positionY } = useSpring({
        scale: active ? 1.4 : 1,
        rotation: active ? (Math.PI / 2) : 0,
        positionX: active ? 1.2 : 0,
        positionY: active ? 1 : 0
    });

    return <animated.group ref={model}
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
        onClick={<Redirect to='/shops' />}
        scale-x={scale}
        scale-y={scale}
        scale-z={scale}>
        <primitive object={scene} {...props} />
    </animated.group>
}

function View_shops() {
    const ref = useRef();

    return <div id="viewShopsBtn">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [5, 8, 5] }}>
            {/* <Stars /> */}
            <Suspense fallback={null}>
                <Stage
                    controls={ref}
                    preset="rembrandt"
                    intensity={1}
                    environment="city"
                >
                    <ShowModel />
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
    </div>
}

export default View_shops