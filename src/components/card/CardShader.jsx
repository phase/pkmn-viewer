'use client'

import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertex from './glsl/card.vert'
import fragment from './glsl/card.frag'

const CardShaderMaterial = shaderMaterial(
    // Uniform
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
        uFoil: new THREE.Texture(),
    },
    vertex,
    fragment
);

extend({ CardShaderMaterial });

export function Card({ artUrl, foilUrl }) {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

    const [image, foil] = useLoader(THREE.TextureLoader, [artUrl, foilUrl]);

    return (
        <mesh>
            <planeGeometry args={[1 / 3.5, 1 / 2.5, 1, 1]} />
            <cardShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} uFoil={foil} />
        </mesh>
    );
};
