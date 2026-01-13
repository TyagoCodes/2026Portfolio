import {Text3D, useGLTF} from "@react-three/drei";

export default function Phone() {
    const gltf = useGLTF("iphone_14_pro.glb");
    return (
        <>
            <mesh scale={[3,3,3]} position={[-0.27,1.77,3.5]} rotation={[-1.5,Math.PI,0]}>
                <primitive object={gltf.scene} />
            </mesh>


            <Text3D
                font={"/IrishGrover_Regular.json"}
                scale={[0.2,0.2, 0.2]}
                position={[-0.38, 2, 3.3]}
                rotation={[0, Math.PI * 2, 0]}
                size={ 0.75 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.1 }
                bevelSize={ 0.01 }
                bevelOffset={ 0.001 }
                bevelSegments={ 5 }
            >
                CV
                <meshMatcapMaterial color={"#90D5FF"} />
            </Text3D>
        </>
    );
}