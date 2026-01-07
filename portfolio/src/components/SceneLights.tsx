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
        color: { value: "#c6b566" },
        intensity: { value: 10.00, min: 0, max: 60, step: 0.01 },
        position: { value: [-0.1, 3.6, 1.6] as THREE.Vector3Tuple, step: 0.1 },
        distance: { value: 7.1, min: 0, max: 100, step: 0.1 },
        decay: { value: 1.7, min: 0, max: 5, step: 0.1 },
    },
        { collapsed: true },
    );

    // SPOTLIGHT(s)
    const spot = useControls("SpotLight", {
        visible: { value: true },
        color: { value: "#796a50" },
        intensity: { value: 27.92, min: 0, max: 60, step: 0.01 },
        position: { value: [-4.6, 0.2, 6.4] as THREE.Vector3Tuple, step: 0.1 },
        target: { value: [-6.6, 2.2, 0.1] as THREE.Vector3Tuple, step: 0.1 },
        distance: { value: 12.7, min: 0, max: 100, step: 0.1 },
        decay: { value: 0.0, min: 0, max: 5, step: 0.1 },
        angle: { value: 0.36, min: 0, max: Math.PI / 2, step: 0.01 },
        penumbra: { value: 0.16, min: 0, max: 1, step: 0.01 },
    },
        { collapsed: false },
    );

    // DIRECT
    const direct = useControls("DirectLight", {
            visible: { value: true },
            color: { value: "#010211" },
            intensity: { value: 12.54, min: 0, max: 60, step: 0.01 },
            position: { value: [1.9, 9.5, -17.2] as THREE.Vector3Tuple, step: 0.1 },

        },
        { collapsed: true },
    );

    // Helper Consts
    const spotHelper = useControls("SpotLightHelper", {
            visible: { value: false },
            color: { value: "#ff0000" },
        },
        { collapsed: false }
    );

    const pointHelper = useControls("PointHelper", {
            visible: { value: false },
            size: { value: 0.2, min: 0.01, max: 5, step: 0.01 },
            color: {value: "#63ff00"},
        },
        { collapsed: true }
    );

    const directHelper = useControls("DirectHelper", {
            visible: { value: false },
            size: { value: 0.2, min: 0.01, max: 5, step: 0.01 },
        },
        { collapsed: true }
    );

    const pointLightRef = useRef<THREE.PointLight>(null!);
    const spotLightRef = useRef<THREE.SpotLight>(null!);
    const spot2Ref = useRef<THREE.SpotLight>(null!);
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
        if (spot2Ref.current) {
            spot2Ref.current.target.position.set(1.7, 0.2, -1.5);
            spot2Ref.current.target.updateMatrixWorld();
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

    // Direct Helper
    useHelper(
        directHelper.visible ? directLightRef : null,
        THREE.DirectionalLightHelper,
        directHelper.size,
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

            {/*Bookshelf Spotlight*/}
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
                visible={true}
                color={"#a0832a"}
                intensity={26.94}
                position={[3.0, 5.2, -1.0]}
                distance={7.1}
                decay={0.8}
                angle={0.49}
                penumbra={0.12}
            />
        </>
    );
}
