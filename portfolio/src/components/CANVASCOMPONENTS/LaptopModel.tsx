import {Float, Text3D, useGLTF} from "@react-three/drei";
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

    return (
        <>
            <mesh>
                <primitive object={gltf.scene} />
            </mesh>

            <Float
                speed={1}
                rotationIntensity={1}
                floatIntensity={1}
                floatingRange={[-0.01, 0.01]}
            >
                <Text3D
                    font={"/IrishGrover_Regular.json"}
                    scale={[0.07,0.07, 0.07]}
                    position={[0.15, 0.28, -0.2]}
                    rotation={[0, Math.PI / -2, 0]}
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.1 }
                    bevelSize={ 0.01 }
                    bevelOffset={ 0.001 }
                    bevelSegments={ 5 }
                >
                    Projects
                    <meshMatcapMaterial color={"#90D5FF"} />
                </Text3D>
            </Float>
        </>
    );
}