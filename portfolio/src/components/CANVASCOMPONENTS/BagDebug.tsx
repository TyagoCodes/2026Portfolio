import { useControls } from 'leva'
import BagModel from "./BagModel.tsx";
import { Text3D } from "@react-three/drei";
import { useViewerStore } from "../../store/useViewerStore";
import { useUiLock } from "../../store/useUiLock";

export default function BagDebug() {
    const { bagScale, bagPosX, bagPosY, bagPosZ, bagRotX, bagRotY, bagRotZ } = useControls(
        "Bag Model Debug",
        {
            bagScale: { value: 0.2, min: 0.1, max: 10, step: 0.1 },
            bagPosX: { value: 0.1, min: -10, max: 10, step: 0.1 },
            bagPosY: { value: -0.28, min: -10, max: 10, step: 0.1 },
            bagPosZ: { value: 4.7, min: -10, max: 10, step: 0.1 },
            bagRotX: { value: 0.00, min: -Math.PI, max: Math.PI, step: 0.01 },
            bagRotY: { value: -1.90, min: -Math.PI, max: Math.PI, step: 0.01 },
            bagRotZ: { value: 0.00, min: -Math.PI, max: Math.PI, step: 0.01 },
        },
        { collapsed: true }
    )

    const open = useViewerStore((s) => s.open);
    const lock = useUiLock((s) => s.lock);
    const unlock = useUiLock((s) => s.unlock);

    return (
        <>
            <mesh scale={[bagScale, bagScale, bagScale]} position={[bagPosX, bagPosY, bagPosZ]} rotation={[bagRotX, bagRotY, bagRotZ]}>
                <BagModel/>
            </mesh>

            <group
                onClick={() => open("experience", "Work1")}
                onPointerDown={lock}
                onPointerUp={unlock}
                onPointerCancel={unlock}
            >
                <Text3D
                    font={"/IrishGrover_Regular.json"}
                    scale={[0.34, 0.34, 0.34]}
                    position={[0.5, 1.3, 4.5]}
                    rotation={[0, Math.PI * 1.93, -0.16]}
                    size={0.75}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.1}
                    bevelSize={0.01}
                    bevelOffset={0.001}
                    bevelSegments={5}
                >
                    Experience
                    <meshMatcapMaterial color={"#FFD700"} />
                </Text3D>
            </group>
        </>
    )
}
