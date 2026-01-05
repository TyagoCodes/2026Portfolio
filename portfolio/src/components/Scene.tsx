import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import TestModel from "./TestModel.tsx";
import Table from "./Table.tsx";
import TextWall3D from "./TextWall3D.tsx";
import BagDebug from "./BagDebug.tsx";
// import BookModel from "./BookModel.tsx";
import BookDebug from "./BookDebug.tsx";
// import LaptopModel from "./LaptopModel.tsx";
import LaptopModelDebug from "./LaptopModelDebug.tsx";


export default function Scene()
{
    const { perfVisible } = useControls({ perfVisible: false })

    // possible useFrame
    return(
        <>
            {perfVisible && <Perf position="top-left" />}

            {/*FOUNDATION*/}
            <TestModel/>

            {/*3DTEXT*/}
            <TextWall3D />

            {/*TABLE*/}
            <mesh scale={[5,5,5]} position={[0,0.8,2]}>
                <Table />
            </mesh>

            {/*BAG (WORK)*/}
            <BagDebug/>

            {/*FLYING BOOK*/}
            <BookDebug/>

            {/*LAPTOP*/}
            <mesh>
                <LaptopModelDebug/>
            </mesh>
        </>
    )
}