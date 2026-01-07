import {Float, Text3D} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

export default function TextWall3D()
{

    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const t = clock.getElapsedTime();
            meshRef.current.position.z = Math.cos(t * -3) * 0.06;
            meshRef.current.rotation.x = Math.cos(t * 2) * 0.06;
        }
    });

    return (
        <mesh
            ref={meshRef}
        >
            <Float
                speed={ 0.3 }
                floatingRange={[-0.5, 0.5]}
                floatIntensity={ 0.7 }
                rotationIntensity={0.10}
            >
                <Text3D
                    font={"/IrishGrover_Regular.json"}
                    scale={[0.34,0.35, 0.35]}
                    position={[-8.45, 4, -0.7]}
                    rotation={[0, Math.PI * 2.12, 0]}
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.1 }
                    bevelSize={ 0.01 }
                    bevelOffset={ 0.001 }
                    bevelSegments={ 5 }
                >
                    Santiago's Portfolio
                    <meshStandardMaterial color={"#abce95"} />
                </Text3D>
            </Float>
        </mesh>
    )
}