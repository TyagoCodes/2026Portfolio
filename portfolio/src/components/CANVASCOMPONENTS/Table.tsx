import {useGLTF} from "@react-three/drei";

export default function Table() {
    const gltf = useGLTF("PortfolioMain.glb");
    return <mesh scale={[5,5,5]} position={[0,0.8,2]}>
        <primitive object={gltf.scene} />
    </mesh>;
}