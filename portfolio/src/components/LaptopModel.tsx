import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function LaptopModel() {
    const gltf = useGLTF("macbook_pro_2021.glb");

    useEffect(() => {
        gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                child.material.roughness = 1.5;
                child.material.metalness = 0;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}
