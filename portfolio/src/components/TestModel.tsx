import {useGLTF} from "@react-three/drei";

export default function TestModel() {
    const gltf = useGLTF("portfolio2026v2.glb");
    return <primitive object={gltf.scene} />;
}