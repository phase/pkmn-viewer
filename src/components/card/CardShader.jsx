'use client'

import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertex from './glsl/card.vert'
import fragment from './glsl/card.frag'
//extend({ PlaneBufferGeometry: THREE.PlaneBufferGeometry })

const CardShaderMaterial = shaderMaterial(
    // Uniform
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
    },
    vertex,
    fragment
);

extend({ CardShaderMaterial });

export function Card() {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

    const [image] = useLoader(THREE.TextureLoader, [
        "https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG070-arceus_vstar.png",
    ]);

    return (
        <mesh>
            <planeGeometry args={[0.4, 0.6, 16, 16]} />
            <cardShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
        </mesh>
    );
};
