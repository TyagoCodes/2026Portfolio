import {useGLTF} from "@react-three/drei";

export default function LaptopModel() {
    const gltf = useGLTF("Laptop.glb");
    return <primitive object={gltf.scene} />;
}