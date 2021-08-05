import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Stars, useGLTF } from "@react-three/drei";

import Model from './Model';
import IphoneModel from "./models/iphoneModel";


function HeadphoneModel(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf')
    return <primitive object={scene} {...props} />
}

function KnifeBlockModel(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/knife-block/model.gltf')
    return <primitive object={scene} {...props} />
}

function PlantModel(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/plant/model.gltf')
    return <primitive object={scene} {...props} />
}

function KeyBoardModel(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/mechanical-keyboard/model.gltf')
    return <primitive object={scene} {...props} />
}

function Display_model() {
    const ref = useRef();

    return <div id="homeModel">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            {/* <Stars /> */}
            <Suspense fallback={null}>
                <Stage
                    controls={ref}
                    preset="rembrandt"
                    intensity={1}
                    environment="city"
                >
                    <IphoneModel />
                    {/* <HeadphoneModel /> */}
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate />
        </Canvas>
    </div>
}

export default Display_model