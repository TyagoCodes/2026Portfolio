import {useGLTF} from "@react-three/drei";

export default function BagModel() {
    const gltf = useGLTF("WorkBag.glb");
    return <primitive object={gltf.scene} />;
}