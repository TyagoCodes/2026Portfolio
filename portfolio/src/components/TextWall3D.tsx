import {Float, Text3D} from "@react-three/drei";

export default function TextWall3D()
{
    return (
        <Float
            speed={ 1.5 }
            floatIntensity={ 3 }
        >
            <Text3D
                font={"/IrishGrover_Regular.json"}
                scale={[0.2,0.2,0.2]}
                position={[-0.6, 6, -4]}
                rotation={[0, Math.PI * -1.98, 0]}
                size={ 0.75 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.1 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                Santiago's Portfolio
                <meshNormalMaterial />
            </Text3D>
        </Float>
    )
}