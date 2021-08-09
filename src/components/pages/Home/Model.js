import React, { useEffect, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ShowLogo() {
    const [model, setModel] = useState();

    useEffect(() => {
        new GLTFLoader().load('/assets/model.gltf', setModel);
    })

    return model ? <primitive object={model.scene} scale={[3,3,3]} position={[0,0,0]} /> : null
}