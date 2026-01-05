import { useControls } from 'leva'
import BookModel from "./BookModel.tsx";

export default function BookDebug() {
    const { bookScale, bookPosX, bookPosY, bookPosZ, bookRotX, bookRotY, bookRotZ } = useControls(
        "Book Model Debug",
        {
            bookScale: { value: 3.8, min: 0.1, max: 10, step: 0.1 },
            bookPosX: { value: 4.8, min: -10, max: 10, step: 0.1 },
            bookPosY: { value: 3.9, min: -10, max: 10, step: 0.1 },
            bookPosZ: { value: -0.1, min: -10, max: 10, step: 0.1 },
            bookRotX: { value: 0.29, min: -Math.PI, max: Math.PI, step: 0.01 },
            bookRotY: { value: -1.20, min: -Math.PI, max: Math.PI, step: 0.01 },
            bookRotZ: { value: -0.20, min: -Math.PI, max: Math.PI, step: 0.01 },
        },
        { collapsed: false }
    )

    return (
        <mesh scale={[bookScale, bookScale, bookScale]} position={[bookPosX, bookPosY, bookPosZ]} rotation={[bookRotX, bookRotY, bookRotZ]}>
            <BookModel/>
        </mesh>
    )
}
