import { useControls } from "leva";
import * as THREE from "three";
import { useRef } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { useEffect} from "react";

export default function SceneLights() {

    // AMBIENT
    const ambient = useControls("AmbientLight", {
            visible: { value: false },
            color: { value: "#ffffff" },
            intensity: { value: 0.3, min: 0, max: 5, step: 0.01 },
        },
        { collapsed: true }
    );

    // POINT LIGHT
    const point = useControls("PointLight", {
        visible: { value: true },
        color: { value: "#dad1ab" },
        intensity: { value: 11.11, min: 0, max: 60, step: 0.01 },
        position: { value: [-0.1, 2.8, 1.6] as THREE.Vector3Tuple, step: 0.1 },
        distance: { value: 5.1, min: 0, max: 100, step: 0.1 },
        decay: { value: 0.6, min: 0, max: 5, step: 0.1 },
    },
        { collapsed: true },
    );

    // SPOTLIGHT(s)
    const spot = useControls("SpotLight", {
        visible: { value: true },
        color: { value: "#d1aa66" },
        intensity: { value: 10.89, min: 0, max: 60, step: 0.01 },
        position: { value: [-1.1, 7.0, 21.7] as THREE.Vector3Tuple, step: 0.1 },
        target: { value: [0, 2, 0] as THREE.Vector3Tuple, step: 0.1 },
        distance: { value: 33.4, min: 0, max: 100, step: 0.1 },
        decay: { value: 1.0, min: 0, max: 5, step: 0.1 },
        angle: { value: 0.52, min: 0, max: Math.PI / 2, step: 0.01 },
        penumbra: { value: 0.57, min: 0, max: 1, step: 0.01 },
    },
        { collapsed: false },
    );

    const spotBook = useControls("SpotBook", {
            visible: { value: true },
            color: { value: "#a0832a" },
            intensity: { value: 26.94, min: 0, max: 60, step: 0.01 },
            position: { value: [3.2, 5.2, -1.6] as THREE.Vector3Tuple, step: 0.1 },
            target: { value: [1.7, 0.2, -1.5] as THREE.Vector3Tuple, step: 0.1 },
            distance: { value: 7.1, min: 0, max: 100, step: 0.1 },
            decay: { value: 0.8, min: 0, max: 5, step: 0.1 },
            angle: { value: 0.49, min: 0, max: Math.PI / 2, step: 0.01 },
            penumbra: { value: 0.12,  min: 0, max: 1, step: 0.01 },
        },
        { collapsed: true },
    );

    // DIRECT
    const direct = useControls("DirectLight", {
            visible: { value: true },
            color: { value: "#010211" },
            intensity: { value: 25.03, min: 0, max: 60, step: 0.01 },
            position: { value: [-11.0, 8.9, -17.2] as THREE.Vector3Tuple, step: 0.1 },

        },
        { collapsed: true },
    );

    // Helper Consts
    const spotHelper = useControls("SpotLightHelper", {
            visible: { value: false },
            color: { value: "#ffffff" },
        },
        { collapsed: false }
    );

    const spotBookHelper = useControls("SpotBookHelper", {
            visible: { value: false },
            size: {value: spotBook.intensity},
            color: { value: "#e86b01" },
        },
        { collapsed: false }
    );

    const pointHelper = useControls("PointHelper", {
            visible: { value: false },
            size: { value: 0.6, min: 0.01, max: 5, step: 0.01 },
            color: {value: "#63ff00"},
        },
        { collapsed: true }
    );

    const directHelper = useControls("DirectHelper", {
            visible: { value: false },
            size: { value: 3.81, min: 0.01, max: 5, step: 0.01 },
            color: {value: "#00ffe2"},
        },
        { collapsed: true }
    );

    const pointLightRef = useRef<THREE.PointLight>(null!);
    const spotLightRef = useRef<THREE.SpotLight>(null!);
    const spotBookRef = useRef<THREE.SpotLight>(null!);
    const directLightRef = useRef<THREE.DirectionalLight>(null!);


    // useFrame(() => {
    //     if (spotLightRef.current) {
    //         spotLightRef.current.target.position.set(...spot.target);
    //         spotLightRef.current.target.updateMatrixWorld();
    //     }
    // });

    // this better because i dont want useFrame for a light that foesnt need to update every frame
    useEffect(() => {
        if (spotLightRef.current) {
            spotLightRef.current.target.position.set(...spot.target);
            spotLightRef.current.target.updateMatrixWorld();
        }
    }, [spot.target]);

    useEffect(() => {
        if (spotBookRef.current) {
            spotBookRef.current.target.position.set(...spotBook.target);
            spotBookRef.current.target.updateMatrixWorld();
        }
    }, []);

    // Point Helper
    useHelper(
        pointHelper.visible ? pointLightRef : null,
        THREE.PointLightHelper,
        pointHelper.size,
        pointHelper.color,
    );

    // Spot Helper
    useHelper(
        spotHelper.visible ? spotLightRef : null,
        THREE.SpotLightHelper,
        spotHelper.color,
    );

    useHelper(
        spotBookHelper.visible ? spotBookRef : null,
        THREE.SpotLightHelper,
        spotBookHelper.color,
    )

    // Direct Helper
    useHelper(
        directHelper.visible ? directLightRef : null,
        THREE.DirectionalLightHelper,
        directHelper.size,
        directHelper.color,
    )

    return (
        <>
            <ambientLight
                visible={ambient.visible}
                color={ambient.color}
                intensity={ambient.intensity}
            />

            {/*Chandelier*/}
            <pointLight
                ref={pointLightRef}
                visible={point.visible}
                color={point.color}
                intensity={point.intensity}
                position={point.position}
                distance={point.distance}
                decay={point.decay}
            />

            {/*MainScene Spotlight*/}
            <SpotLight
                ref={spotLightRef}
                visible={spot.visible}
                color={spot.color}
                intensity={spot.intensity}
                position={spot.position}
                distance={spot.distance}
                decay={spot.decay}
                angle={spot.angle}
                penumbra={spot.penumbra}
            />

            {/*NIGHT LIGHT*/}
            <directionalLight
                ref={directLightRef}
                visible={direct.visible}
                color={direct.color}
                intensity={direct.intensity}
                position={direct.position}
            />

            {/*BookLamp Spotlight*/}
            <SpotLight
                ref={spotBookRef}
                visible={spotBook.visible}
                color={spotBook.color}
                intensity={spotBook.intensity}
                position={spotBook.position}
                distance={spotBook.distance}
                decay={spotBook.decay}
                angle={spotBook.angle}
                penumbra={spotBook.penumbra}
            />
        </>
    );
}
