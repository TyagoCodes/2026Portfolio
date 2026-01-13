import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber";
import {Leva} from "leva";
import Scene from "./components/CANVASCOMPONENTS/Scene.tsx";
// import CameraWithOrbitTuner from "./components/CANVASCOMPONENTS/CameraWithOrbitTuner.tsx";
import SceneLights from "./components/CANVASCOMPONENTS/SceneLights.tsx";
import {OrbitControls} from "@react-three/drei";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Leva collapsed={true}/>

      {/*TO WORK ON THIS BECAUSE OVERFLOWS TO THE SIDES ON MOBILE*/}
      {/*<div className={"flex flex-row justify-between bg-blue-950"}>*/}
      {/*    <div className={"m-10 border border-b-blue-950 bg-gray-400 "}>*/}
      {/*        <h1>MY CV</h1>*/}
      {/*    </div>*/}

      {/*    <div className={"m-10 border border-b-blue-950 bg-gray-400 "}>*/}
      {/*        <h1>EXPERIENCE</h1>*/}
      {/*    </div>*/}

      {/*    <div className={"m-10 border border-b-blue-950 bg-gray-400 "}>*/}
      {/*        <h1>EDUCATION</h1>*/}
      {/*    </div>*/}

      {/*    <div className={"m-10 border border-b-blue-950 bg-gray-400 "}>*/}
      {/*        <h1>PROJECTS</h1>*/}
      {/*    </div>*/}
      {/*</div>*/}

    <div className={"w-full h-screen m-0 overflow-hidden bg-gray-950"}>
      <Canvas
        flat
      >

        <OrbitControls/>
        {/*<CameraWithOrbitTuner/>*/}

        <Scene/>

        <SceneLights/>

      </Canvas>


    </div>
  </StrictMode>,
)
