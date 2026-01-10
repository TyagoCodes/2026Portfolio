import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function BagModel() {
    const gltf = useGLTF("briefcase.glb");

    // KHR_materials_pbrSpecularGlossiness doesnt work on 3js so ill add my own material color
    useEffect(() => {
        gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                child.material.color.set("#3f2921");
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}
