import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber";
import {Leva} from "leva";
import Scene from "./components/Scene.tsx";
import CameraWithOrbitTuner from "./components/CameraWithOrbitTuner.tsx";
import SceneLights from "./components/SceneLights.tsx";
// import {OrbitControls} from "@react-three/drei";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Leva collapsed={true}/>

    <div className={"w-full h-screen m-0 overflow-hidden bg-gray-950"}>
      <Canvas
        flat
      >

        {/*<OrbitControls/>*/}
        <CameraWithOrbitTuner/>

        <Scene/>

        <SceneLights/>

      </Canvas>


    </div>
  </StrictMode>,
)
