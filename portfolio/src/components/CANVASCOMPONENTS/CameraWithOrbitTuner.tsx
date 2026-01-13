import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { folder, useControls } from "leva";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export default function CameraWithOrbitTuner() {
    const { camera } = useThree();
    const controlsRef = useRef<OrbitControlsImpl | null>(null);

    const { x, y, z, tx, ty, tz } = useControls(
        "Orbit Camera",
        {
            position: folder({
                x: { value: 0, min: -20, max: 20, step: 0.01 },
                y: { value: 5, min: -20, max: 20, step: 0.01 },
                z: { value: 6, min: -20, max: 20, step: 0.01 },
            }),
            target: folder({
                tx: { value: 0, min: -20, max: 20, step: 0.01 },
                ty: { value: 1, min: -20, max: 20, step: 0.01 },
                tz: { value: 1.43, min: -20, max: 20, step: 0.01 },
            }),
        },
        { collapsed: true }
    );

    useEffect(() => {
        camera.position.set(x, y, z);

        const c = controlsRef.current;
        if (c) {
            c.target.set(tx, ty, tz);
            c.update();
        } else {
            camera.lookAt(new THREE.Vector3(tx, ty, tz));
        }

        camera.updateMatrixWorld();
    }, [camera, x, y, z, tx, ty, tz]);

    return (
        <OrbitControls
            ref={controlsRef}
            makeDefault
            enablePan={false}
            enableZoom
            minDistance={2}
            maxDistance={8}
            minPolarAngle={THREE.MathUtils.degToRad(70)}
            maxPolarAngle={THREE.MathUtils.degToRad(80)}
            minAzimuthAngle={THREE.MathUtils.degToRad(-45)}
            maxAzimuthAngle={THREE.MathUtils.degToRad(45)}
        />
    );
}