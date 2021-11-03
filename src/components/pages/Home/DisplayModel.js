import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import IphoneModel from "./models/iphoneModel";
import KeyboardModel from "./models/KeyboardModel";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Display_model(props) {
    const ref = useRef();

    var userControls = props.controls ? true : false

    return <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [5, 8, 5] }}>
        <Suspense fallback={null}>
            <Stage
                controls={ref}
                preset="rembrandt"
                intensity={1}
                environment="city"
            >
                {Get_model(props.model_no, props)}
            </Stage>
        </Suspense>
        <OrbitControls ref={ref}
            autoRotate={!userControls}
            enableZoom={userControls}
            enablePan={userControls}
            enableRotate={userControls} />
    </Canvas>

}

function Get_model(model_no, props) {
    switch (model_no) {
        case 1:
            return <KeyboardModel />

        case 2:
            return <IphoneModel />

        default:
            const Model = () => {
                const [model, setModel] = useState()

                useEffect(() => {
                    new GLTFLoader().load(props.url, setModel)
                })

                return model ? <primitive object={model.scene} /> : null
            }

            return Model
    }
}

export default Display_model