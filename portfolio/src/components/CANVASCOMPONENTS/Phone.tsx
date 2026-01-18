import {useGLTF} from "@react-three/drei";

export default function Phone() {
    const gltf = useGLTF("iphone_14_pro.glb");
    return (
        <>
            <mesh scale={[3,3,3]} position={[-0.27,1.77,3.5]} rotation={[-1.5,Math.PI,0]}>
                <primitive object={gltf.scene} />
            </mesh>
        </>
    );
}