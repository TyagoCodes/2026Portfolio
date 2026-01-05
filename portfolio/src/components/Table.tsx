import {useGLTF} from "@react-three/drei";

export default function Table() {
    const gltf = useGLTF("PortfolioMain.glb");
    return <primitive object={gltf.scene} />;
}