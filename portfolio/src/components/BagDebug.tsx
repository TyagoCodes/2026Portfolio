import { useControls } from 'leva'
import BagModel from "./BagModel.tsx";

export default function BagDebug() {
    const { bagScale, bagPosX, bagPosY, bagPosZ, bagRotX, bagRotY, bagRotZ } = useControls(
        "Bag Model Debug",
        {
            bagScale: { value: 3.5, min: 0.1, max: 10, step: 0.1 },
            bagPosX: { value: 2, min: -10, max: 10, step: 0.1 },
            bagPosY: { value: 1.8, min: -10, max: 10, step: 0.1 },
            bagPosZ: { value: 3.8, min: -10, max: 10, step: 0.1 },
            bagRotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
            bagRotY: { value: -0.47, min: -Math.PI, max: Math.PI, step: 0.01 },
            bagRotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        },
        { collapsed: true }
    )

    return (
        <mesh scale={[bagScale, bagScale, bagScale]} position={[bagPosX, bagPosY, bagPosZ]} rotation={[bagRotX, bagRotY, bagRotZ]}>
            <BagModel/>
        </mesh>
    )
}
