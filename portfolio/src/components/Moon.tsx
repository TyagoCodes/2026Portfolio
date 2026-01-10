import {useGLTF} from "@react-three/drei";
import {useEffect} from "react";
import * as THREE from "three";

export default function Moon() {
    const gltf = useGLTF("moon.glb");

    useEffect(() => {
        gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                child.material.color.set(0x030744);
                child.material.emissive.set(0x030744);
                child.material.emissiveIntensity = 0.5;
            }
        });
    }, [gltf]);

    return <mesh scale={[0.1,0.1,0.1]} position={[-19.0,14,-70]}>
        <primitive object={gltf.scene} />
    </mesh>;
}
