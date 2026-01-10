import {useGLTF} from "@react-three/drei";

export default function BookModel() {
    const gltf = useGLTF("paladins_book.glb");
    return <primitive object={gltf.scene} />;
}