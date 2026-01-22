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

            {/*FLYING BOOK*/}
            <BookDebug/>

            {/*LAPTOP*/}
            <LaptopModelDebug/>

            {/*BUTTERFLY PARTICLES*/}
            <ButterflyParticles/>

            {/*COFFEE SMOKE*/}
            <CoffeeSmoke/>

            {/*PHONE*/}
            <Phone source={"iOS"} id={"iOS2"}/>


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