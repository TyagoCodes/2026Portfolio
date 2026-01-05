import {useGLTF} from "@react-three/drei";

export default function BookModel() {
    const gltf = useGLTF("Book.glb");
    return <primitive object={gltf.scene} />;
}