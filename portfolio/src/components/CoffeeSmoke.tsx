import * as THREE from "three";
import {TextureLoader} from "three";
import {useFrame, useLoader} from "@react-three/fiber";
import {useMemo} from "react";

import coffeeSmokeVertexShader from '../shaders/coffeeSmoke/vertex.glsl?raw';
import coffeeSmokeFragmentShader from '../shaders/coffeeSmoke/fragment.glsl?raw';

export default  function CoffeeSmoke() {

    const perlinTexture = useLoader(TextureLoader, "./perlin.png");

    useMemo(() => {
        perlinTexture.wrapS = perlinTexture.wrapT = THREE.RepeatWrapping;
        perlinTexture.colorSpace = THREE.NoColorSpace;
    }, [perlinTexture]);


    const uniforms = useMemo(
        () => ({
            uPerlinTexture: new THREE.Uniform(perlinTexture),
            uTime: new THREE.Uniform(0),
        }),
        [perlinTexture]
    );

    useFrame(({ clock }) => {

        smokeMaterial.uniforms.uTime.value = clock.getElapsedTime()

    });

    const smokeMaterial = useMemo(
        () =>
            new THREE.ShaderMaterial({
                vertexShader: coffeeSmokeVertexShader,
                fragmentShader: coffeeSmokeFragmentShader,
                uniforms:
                {
                    uTime: new THREE.Uniform(0),
                    uPerlinTexture: new THREE.Uniform(perlinTexture)
                },
                side: THREE.DoubleSide,
                transparent: true,
                depthWrite: false,
            }),
        [uniforms]
    );

    return (
        <mesh position={[-0.42,2.5,2.5]}>
            <planeGeometry args={[0.38, 1, 128, 128]} />
            <primitive object={smokeMaterial} attach="material" />
        </mesh>
    );
}