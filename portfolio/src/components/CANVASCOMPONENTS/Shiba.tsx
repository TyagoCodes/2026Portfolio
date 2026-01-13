import {useGLTF} from "@react-three/drei";

export default function Shiba()
{
    const gltf = useGLTF("shiba.glb")

    return <mesh scale={[0.9,0.9,0.9]} position={[-2.5,2.2,2.6]} rotation={[0,0.3,0]}>
        <primitive object={gltf.scene} />
    </mesh>;
}