import { useControls } from 'leva'
import LaptopModel from "./LaptopModel.tsx";
import { Text3D } from "@react-three/drei";
import { useViewerStore } from "../../store/useViewerStore";
import { useUiLock } from "../../store/useUiLock";

export default function LaptopModelDebug() {
    const { Scale, PosX, PosY, PosZ, RotX, RotY, RotZ } = useControls(
        "Laptop Debug",
        {
            Scale: { value: 3.1, min: 0.1, max: 10, step: 0.1 },
            PosX: { value: 0.556, min: -10, max: 10, step: 0.1 },
            PosY: { value: 1.786, min: -10, max: 10, step: 0.1 },
            PosZ: { value: 3.3, min: -10, max: 10, step: 0.1 },
            RotX: { value: 0.26, min: -Math.PI, max: Math.PI, step: 0.01 },
            RotY: { value: 1.56, min: -Math.PI, max: Math.PI, step: 0.01 },
            RotZ: { value: -0.27, min: -Math.PI, max: Math.PI, step: 0.01 },
        },
        {collapsed: true}
    )

    const open = useViewerStore((s) => s.open);
    const lock = useUiLock((s) => s.lock);
    const unlock = useUiLock((s) => s.unlock);

    return (
        <>
            <mesh
                scale={[Scale, Scale, Scale]}
                position={[PosX, PosY, PosZ]}
                rotation={[RotX, RotY, RotZ]}>
                <LaptopModel/>
            </mesh>

            <group
                onClick={() => open("projects", "portfolio")}
                onPointerDown={lock}
                onPointerUp={unlock}
                onPointerCancel={unlock}
            >
                <Text3D
                    font={"/IrishGrover_Regular.json"}
                    scale={[0.34, 0.34, 0.34]}
                    position={[0.2, 2.7, 2.8]}
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
                    Projects
                    <meshMatcapMaterial color={"#FF69B4"} />
                </Text3D>
            </group>
        </>
    )
}
