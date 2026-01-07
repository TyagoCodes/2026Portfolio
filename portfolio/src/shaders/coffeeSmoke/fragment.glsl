varying vec2 vUv;
uniform sampler2D uPerlinTexture;
uniform float uTime;

void main()
{
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.4;
    smokeUv.y *= 0.3;
    smokeUv.y -= uTime * 0.04;

    // Smoke
    float smoke = texture(uPerlinTexture, smokeUv).r;

    // Remap
    smoke = smoothstep(0.4, 1.0, smoke);

    // Edges
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);

    // Final color
    gl_FragColor = vec4(255, 247, 243, smoke);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}