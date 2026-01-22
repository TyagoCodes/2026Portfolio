import {Float, Text3D, useGLTF} from "@react-three/drei";
import { useViewerStore } from "../../store/useViewerStore";
import { useUiLock } from "../../store/useUiLock";
import type {ViewerSource} from "../../data";


type Props = {
    source: ViewerSource
    id: string
}

export default function Phone({source, id}: Props) {
    const gltf = useGLTF("iphone_14_pro.glb");
    const open = useViewerStore((s) => s.open);
    const lock = useUiLock((s) => s.lock);
    const unlock = useUiLock((s) => s.unlock);

    return (
        <>
            <mesh scale={[3,3,3]} position={[-0.27,1.77,3.5]} rotation={[-1.5,Math.PI,0]}>
                <primitive object={gltf.scene} />
            </mesh>

            <Float
                speed={ 0.3 }
                floatingRange={[-0.5, 0.5]}
                floatIntensity={ 0.7 }
                rotationIntensity={0.10}
            >
                <group
                    onClick={() => open(source, id)}
                    onPointerDown={lock}
                    onPointerUp={unlock}
                    onPointerCancel={unlock}
                >
                    <Text3D
                        font={"/IrishGrover_Regular.json"}
                        scale={[0.34,0.35, 0.35]}
                        position={[-1, 2.4, 3.5]}
                        rotation={[0, Math.PI / 0.5 , 0]}
                        size={ 0.75 }
                        height={ 0.2 }
                        curveSegments={ 12 }
                        bevelEnabled
                        bevelThickness={ 0.1 }
                        bevelSize={ 0.01 }
                        bevelOffset={ 0.001 }
                        bevelSegments={ 5 }
                    >
                        iOS
                        <meshMatcapMaterial color={"#c5c5c5"} />
                    </Text3D>
                </group>
            </Float>
        </>
    );
}