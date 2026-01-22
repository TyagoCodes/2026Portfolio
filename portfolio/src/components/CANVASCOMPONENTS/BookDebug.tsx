import { useControls } from 'leva'
import BookModel from "./BookModel.tsx";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import {Text3D} from "@react-three/drei";
import { useViewerStore } from "../../store/useViewerStore";
import { useUiLock } from "../../store/useUiLock";

export default function BookDebug() {
    const meshRef = useRef<THREE.Mesh>(null!);

    const { bookScale, bookPosX, bookPosY, bookPosZ, bookRotX, bookRotY, bookRotZ, floatSpeed, floatHeight } = useControls(
        "Book Model Debug",
        {
            bookScale: { value: 5.6, min: 0.1, max: 10, step: 0.1 },
            bookPosX: { value: 2.6, min: -10, max: 10, step: 0.1 },
            bookPosY: { value: 3.1, min: -10, max: 10, step: 0.1 },
            bookPosZ: { value: -1.4, min: -10, max: 10, step: 0.1 },
            bookRotX: { value: -0.30, min: -Math.PI, max: Math.PI, step: 0.01 },
            bookRotY: { value: 0.55, min: -Math.PI, max: Math.PI, step: 0.01 },
            bookRotZ: { value: 0.35, min: -Math.PI, max: Math.PI, step: 0.01 },
            floatSpeed: { value: 1.5, min: 0.1, max: 5, step: 0.1 },
            floatHeight: { value: 0.30, min: 0.05, max: 2, step: 0.05 },
        },
        { collapsed: true }
    )

    const open = useViewerStore((s) => s.open);
    const lock = useUiLock((s) => s.lock);
    const unlock = useUiLock((s) => s.unlock);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const t = clock.getElapsedTime();
            meshRef.current.position.y = bookPosY + Math.sin(t * floatSpeed) * floatHeight;
            meshRef.current.position.z = bookPosZ + Math.sin(t * -3) * 0.2;

            const cycleTime = t % 15;
            if (cycleTime < 2) {
                meshRef.current.rotation.x = bookRotX + (cycleTime / 2.2) * Math.PI * 2;
            }
        }
    });

    return (
        <>
            <mesh
                ref={meshRef}
                scale={[bookScale, bookScale, bookScale]}
                position={[bookPosX, bookPosY, bookPosZ]}
                rotation={[bookRotX, bookRotY, bookRotZ]}
            >
                <BookModel />
            </mesh>

            <group
                onClick={() => open("education", "school1")}
                onPointerDown={lock}
                onPointerUp={unlock}
                onPointerCancel={unlock}
            >
                <Text3D
                    font={"/IrishGrover_Regular.json"}
                    scale={[0.34,0.34,0.34]}
                    position={[1.7, 4.2, -1.55]}
                    rotation={[0, Math.PI * 1.93 , -0.16]}
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.1 }
                    bevelSize={ 0.01 }
                    bevelOffset={ 0.001 }
                    bevelSegments={ 5 }
                >
                    Education
                    <meshMatcapMaterial color={"#90D5FF"} />
                </Text3D>
            </group>
        </>
    )
}
