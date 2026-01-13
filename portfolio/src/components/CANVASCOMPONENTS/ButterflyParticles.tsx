import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ButterflyParticles() {
    const [particleTexture] = useTexture(["./Butterfly.png"]);
    const geomRef = useRef<THREE.BufferGeometry>(null);

    const count = 30;
    const size = 0.4;
    const spread = 1.2;
    const speed = 0.07;

    const driftX = 6;
    const driftY = 2;
    const driftZ = 1.5;

    const anchorPosition = useMemo(() => new THREE.Vector3(0, 3, 0), []);

    const { basePositions, phases, speeds, colors } = useMemo(() => {
        const basePositions = new Float32Array(count * 3);
        const phases = new Float32Array(count * 3);
        const speeds = new Float32Array(count);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            basePositions[i3 + 0] = (Math.random() - 0.5) * spread;
            basePositions[i3 + 1] = (Math.random() - 0.5) * spread * 0.7;
            basePositions[i3 + 2] = (Math.random() - 0.5) * spread;

            phases[i3 + 0] = Math.random() * Math.PI * 2;
            phases[i3 + 1] = Math.random() * Math.PI * 2;
            phases[i3 + 2] = Math.random() * Math.PI * 2;

            speeds[i] = 0.7 + Math.random() * 0.3;

            // RGB
            colors[i3 + 0] = 1;
            colors[i3 + 1] = 1;
            colors[i3 + 2] = 0;
        }

        return { basePositions, phases, speeds, colors };
    }, []);

    useFrame(({ clock }) => {
        const geom = geomRef.current;
        if (!geom) return;

        const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;
        if (!posAttr) return;

        const t = clock.getElapsedTime() * speed;
        const arr = posAttr.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const s = speeds[i];

            const ox = Math.sin(t * 0.8 * s + phases[i3 + 0]) * driftX;
            const oy = Math.cos(t * 0.6 * s + phases[i3 + 1]) * driftY;
            const oz = Math.sin(t * 0.7 * s + phases[i3 + 2]) * driftZ;

            arr[i3 + 0] = anchorPosition.x + basePositions[i3 + 0] + ox;
            arr[i3 + 1] = anchorPosition.y + basePositions[i3 + 1] + oy;
            arr[i3 + 2] = anchorPosition.z + basePositions[i3 + 2] + oz;
        }

        posAttr.needsUpdate = true;
    });

    return (
        <points frustumCulled={false}>
            <bufferGeometry ref={geomRef}>
                <bufferAttribute
                    attach="attributes-position"
                    args={[basePositions.slice(), 3]}
                    count={count}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                    count={count}
                />
            </bufferGeometry>

            <pointsMaterial
                size={size}
                sizeAttenuation
                vertexColors
                alphaMap={particleTexture}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
