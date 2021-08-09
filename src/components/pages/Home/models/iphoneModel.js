/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import { useSpring, animated, a } from '@react-spring/three'

export default function IphoneModel(props) {
  const [active, setActive] = useState(false);

  const group = useRef()
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
  )

  const { scale, rotation, positionX, positionY } = useSpring({
    scale: active ? .8 : 1.,
    rotation: active ? (Math.PI / 2) : 0,
    positionX: active ? 1.2 : 0,
    positionY: active ? 1 : 0
  });

  return (
    <animated.group ref={group} {...props} dispose={null}
      onClick={() => setActive(!active)}
      scale-x={scale}
      scale-y={scale}
      scale-z={scale}
      position-x={positionX}
      position-y={positionY}
      rotation-z={rotation}>
      <animated.group position={[0, 1.56, 0]}>
        <animated.mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
        <animated.mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
        <animated.mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
        <animated.mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
        <animated.mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
        <animated.mesh
          geometry={nodes.AntennaLineBottom001.geometry}
          material={nodes.AntennaLineBottom001.material}
          position={[0, -2.68, 0]}
        />
        <animated.mesh
          geometry={nodes.AntennaLineTop001.geometry}
          material={nodes.AntennaLineTop001.material}
          position={[0, 0.02, 0]}
        />
        <animated.mesh
          geometry={nodes.BackCameraP1001.geometry}
          material={materials['Black.015']}
          position={[0.7, 1.03, -0.09]}
        />
        <animated.mesh
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={nodes.BackCameraBottomLens001.material}
          position={[0.7, 0.88, -0.08]}
        />
        <animated.mesh
          geometry={nodes.AppleLogo001.geometry}
          material={materials['AppleLogo.001']}
          position={[0.17, 0.52, -0.08]}
        />
        <animated.mesh
          geometry={nodes.FlashBG001.geometry}
          material={materials['PinkFlash.002']}
          position={[0.71, 1.03, -0.089]}
        />
        <animated.mesh
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials['FrontCameraBlack.002']}
          position={[0.34, 1.32, 0.08]}
        />
        <animated.mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 0.88, -0.09]}
        />
        <animated.mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.7, 1.18, -0.08]}
        />
        <animated.mesh
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials['FrontSpeaker.001']}
          position={[0.16, 1.32, 0.08]}
        />
        <animated.mesh
          geometry={nodes.CameraBump001.geometry}
          material={nodes.CameraBump001.material}
          position={[0.7, 1.04, -0.08]}
        />
        <animated.mesh
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={nodes.BackCameraTopGreyRing001.material}
          position={[0.7, 1.18, -0.09]}
        />
        <animated.mesh
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials['iPhoneLogo.001']}
          position={[0.2, -1.18, -0.08]}
        />
        <animated.mesh
          geometry={nodes.MuteSwitch001.geometry}
          material={nodes.MuteSwitch001.material}
          position={[-0.65, 0.92, 0.01]}
        />
        <animated.group position={[0.98, -0.04, 0]}>
          <animated.mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
          <animated.mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
        </animated.group>
        <animated.group position={[0.97, 0.56, 0]}>
          <animated.mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
          <animated.mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
        </animated.group>
        <animated.mesh
          geometry={nodes.VolumeButtons001.geometry}
          material={nodes.VolumeButtons001.material}
          position={[-0.66, 0.21, 0]}
        />
        <animated.mesh geometry={nodes.SCREEN.geometry} material={materials['Display.002']} />
      </animated.group>
    </animated.group>
  )
}

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
)
