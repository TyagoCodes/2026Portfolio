import { useControls } from 'leva'
import LaptopModel from "./LaptopModel.tsx";
import {Html} from "@react-three/drei";

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

    return (
        <mesh
            scale={[Scale, Scale, Scale]}
            position={[PosX, PosY, PosZ]}
            rotation={[RotX, RotY, RotZ]}>

            <Html
                transform
                distanceFactor={1.2}
                position={[0,0,0]}
            >
                {/*<div className={"bg-cyan-400 text-"}>*/}
                {/*   <h1>Laptop Screen html test</h1>*/}
                {/*</div>*/}
            </Html>

            <LaptopModel/>
        </mesh>
    )
}
