import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import IphoneModel from "./models/iphoneModel";
import KeyboardModel from "./models/KeyboardModel";

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
                {get_model(props.model_no)}
            </Stage>
        </Suspense>
        <OrbitControls ref={ref}
            autoRotate={!userControls}
            enableZoom={userControls}
            enablePan={userControls}
            enableRotate={userControls} />
    </Canvas>

}

function get_model(model_no) {
    // console.log(model_no) // Debug
    switch (model_no) {
        case 1:
            return <KeyboardModel />

        default:
            return <IphoneModel />
    }
}

export default Display_model