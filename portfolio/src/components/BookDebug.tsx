import { useControls } from 'leva'
import BookModel from "./BookModel.tsx";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function BookDebug() {
    const meshRef = useRef<THREE.Mesh>(null!);

    const { bookScale, bookPosX, bookPosY, bookPosZ, bookRotX, bookRotY, bookRotZ, floatSpeed, floatHeight } = useControls(
        "Book Model Debug",
        {
            bookScale: { value: 3.8, min: 0.1, max: 10, step: 0.1 },
            bookPosX: { value: 4.8, min: -10, max: 10, step: 0.1 },
            bookPosY: { value: 3.9, min: -10, max: 10, step: 0.1 },
            bookPosZ: { value: -0.1, min: -10, max: 10, step: 0.1 },
            bookRotX: { value: 0.29, min: -Math.PI, max: Math.PI, step: 0.01 },
            bookRotY: { value: -1.20, min: -Math.PI, max: Math.PI, step: 0.01 },
            bookRotZ: { value: -0.20, min: -Math.PI, max: Math.PI, step: 0.01 },
            floatSpeed: { value: 1.5, min: 0.1, max: 5, step: 0.1 },
            floatHeight: { value: 0.3, min: 0.05, max: 2, step: 0.05 },
        },
        { collapsed: true }
    )

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const t = clock.getElapsedTime();
            meshRef.current.position.y = bookPosY + Math.sin(t * floatSpeed) * floatHeight;
            meshRef.current.position.z = bookPosZ + Math.sin(t * -3) * 0.2;
        }
    });

    return (
        <mesh
            ref={meshRef}
            scale={[bookScale, bookScale, bookScale]}
            position={[bookPosX, bookPosY, bookPosZ]}
            rotation={[bookRotX, bookRotY, bookRotZ]}
        >
            <BookModel />
        </mesh>
    )
}
