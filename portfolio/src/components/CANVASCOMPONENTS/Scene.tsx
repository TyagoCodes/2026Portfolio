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
import ButterflyParticles from "./ButterflyParticles.tsx";
import CoffeeSmoke from "./CoffeeSmoke.tsx";
import Moon from "./Moon.tsx";
import Phone from "./Phone.tsx";
import Shiba from "./Shiba.tsx";
import {OpenButton3D} from "../HTMLCOMPONENTS/OpenButton3D.tsx";
import {ViewerCard3D} from "../HTMLCOMPONENTS/ViewerCard3D.tsx";


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
            <Table/>

            {/*BAG (WORK)*/}
            <BagDebug/>
            <group scale={[0.5,0.5,0.5]} position={[1.7,0.55,5.1]} rotation={[0,-0.3,0]}>
                <OpenButton3D source={"experience"} id={"Work1"}/>
            </group>

            {/*FLYING BOOK*/}
            <BookDebug/>
            <group scale={[0.5,0.5,0.5]} position={[4.5,4,-2]}>
                <OpenButton3D source={"education"} id={"school1"}/>
            </group>

            {/*LAPTOP*/}
            <LaptopModelDebug/>
            <group scale={[0.5,0.5,0.5]} position={[2,1.5,2]}>
                <OpenButton3D source={"projects"} id={"portfolio"}/>
            </group>

            {/*BUTTERFLY PARTICLES*/}
            <ButterflyParticles/>

            {/*COFFEE SMOKE*/}
            <CoffeeSmoke/>

            {/*PHONE*/}
            <Phone/>

            {/*SHIBA*/}
            <Shiba/>

            {/*MOON*/}
            <Moon/>

            {/*FOG*/}
            {/*<fogExp2 args={["#ffffff", 4]}/>*/}

            {/*CARD*/}
            <ViewerCard3D/>
        </>
    )
}