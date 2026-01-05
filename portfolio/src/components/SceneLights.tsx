import { useControls } from "leva";
import * as THREE from "three";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";

export default function SceneLights() {

    // AMBIENT
    const ambient = useControls("Ambient Light", {
        visible: { value: true },
        color: { value: "#ffffff" },
        intensity: { value: 0.3, min: 0, max: 5, step: 0.01 },
    },
        {collapsed: true}
    );

    // POINT LIGHT
    const point = useControls("Point Light", {
        visible: { value: true },
        color: { value: "#ffffff" },
        intensity: { value: 40.0, min: 0, max: 60, step: 0.01 },
        position: { value: [-0.4, 6.6, 3.4] as THREE.Vector3Tuple, step: 0.1 },
        distance: { value: 0, min: 0, max: 100, step: 0.1 },
        decay: { value: 1.8, min: 0, max: 5, step: 0.1 },
    });

    const pointHelper = useControls("Point Helper", {
        visible: { value: false },
        size: { value: 0.2, min: 0.01, max: 5, step: 0.01 },
    },
        {collapsed: true}
    );

    const pointLightRef = useRef<THREE.PointLight>(null!);

    //Helpers
    useHelper(
        pointHelper.visible ? pointLightRef : null,
        THREE.PointLightHelper,
        pointHelper.size
    );

    return (
        <>
            <ambientLight
                visible={ambient.visible}
                color={ambient.color}
                intensity={ambient.intensity}
            />

            <pointLight
                ref={pointLightRef}
                visible={point.visible}
                color={point.color}
                intensity={point.intensity}
                position={point.position}
                distance={point.distance}
                decay={point.decay}
            />
        </>
    );
}