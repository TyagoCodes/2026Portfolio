import { useControls } from 'leva'
import LaptopModel from "./LaptopModel.tsx";
import {Html} from "@react-three/drei";

export default function LaptopModelDebug() {
    const { LaptopScale, LaptopPosX, LaptopPosY, LaptopPosZ, LaptopRotX, LaptopRotY, LaptopRotZ } = useControls(
        "Laptop Debug",
        {
            LaptopScale: { value: 5.0, min: 0.1, max: 10, step: 0.1 },
            LaptopPosX: { value: 0.24, min: -10, max: 10, step: 0.1 },
            LaptopPosY: { value: 0.8, min: -10, max: 10, step: 0.1 },
            LaptopPosZ: { value: 2.0, min: -10, max: 10, step: 0.1 },
            LaptopRotX: { value: 0.00, min: -Math.PI, max: Math.PI, step: 0.01 },
            LaptopRotY: { value: -0.22, min: -Math.PI, max: Math.PI, step: 0.01 },
            LaptopRotZ: { value: 0.01, min: -Math.PI, max: Math.PI, step: 0.01 },
        },
        { collapsed: false }
    )

    return (
        <mesh
            scale={[LaptopScale, LaptopScale, LaptopScale]}
            position={[LaptopPosX, LaptopPosY, LaptopPosZ]}
            rotation={[LaptopRotX, LaptopRotY, LaptopRotZ]}>

            <Html
                transform
                distanceFactor={1.2}
                position={[0.24,0.8,2.0]}
            >
                <div className={"bg-cyan-400 text-"}>
                   <h1>Test</h1>
                </div>
            </Html>

            <LaptopModel/>
        </mesh>
    )
}
