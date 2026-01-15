import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber";
import {Leva} from "leva";
import Scene from "./components/CANVASCOMPONENTS/Scene.tsx";
import CameraWithOrbitTuner from "./components/CANVASCOMPONENTS/CameraWithOrbitTuner.tsx";
import SceneLights from "./components/CANVASCOMPONENTS/SceneLights.tsx";
import {Loader} from "@react-three/drei";
// import {OrbitControls} from "@react-three/drei";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Leva collapsed={true} hidden={true}/>
    <div className={"w-full h-screen m-0 overflow-hidden bg-gray-950"}>
      <Canvas
        flat
      >

        {/*<OrbitControls/>*/}
        <CameraWithOrbitTuner/>

        <Scene/>

        <SceneLights/>

      </Canvas>

      <Loader/>

    </div>
  </StrictMode>,
)
