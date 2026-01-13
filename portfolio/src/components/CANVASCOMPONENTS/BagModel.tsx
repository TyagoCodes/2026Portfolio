import {Float, Text3D, useGLTF} from "@react-three/drei";
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

    return (
        <>
            <mesh>
                <primitive object={gltf.scene} />
            </mesh>

            <Float
                speed={1}
                rotationIntensity={1}
                floatIntensity={1}
                floatingRange={[-0.01, 0.2]}
            >
                <Text3D
                    font={"/IrishGrover_Regular.json"}
                    scale={[1,1,1]}
                    position={[0.15, 8, 2]}
                    rotation={[0, Math.PI / 1.9 ,0]}
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.1 }
                    bevelSize={ 0.01 }
                    bevelOffset={ 0.001 }
                    bevelSegments={ 5 }
                >
                    Experience
                    <meshMatcapMaterial color={"#90D5FF"} />
                </Text3D>
            </Float>
        </>
    );
}
