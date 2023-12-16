'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const Box = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Box), { ssr: false })
const Card = dynamic(() => import('@/components/card/CardShader').then((mod) => mod.Card), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Next + R3F</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Pokemon Card Viewer</h1>
          <p className='mb-8 text-2xl leading-normal'>Using Next.js, React, React-three-fiber and Threejs.</p>
        </div>

        <div className='w-full text-center md:w-3/5'>
          <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Box scale={2} position={[0, 0, -5]} rotation={[0.0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>

      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        {/* first row
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h2>
          <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
        </div>
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
              <Common color={'lightpink'} />
            </Suspense>
          </View>
        </div> */}
        {/* second row
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
              <Common color={'lightblue'} />
            </Suspense>
          </View>
        </div>
        <div className='w-full p-6 sm:w-1/2'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Dom and 3D are synchronized</h2>
          <p className='mb-8 text-gray-600'>
            3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You
            tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to
            have multiple views with a single, performant canvas. These views will follow their tracking elements,
            scroll along, resize, etc.
          </p>
        </div> */}
        {/* third row
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>GLSL Card Shader</h2>
          <p className='mb-8 text-gray-600'>Texture is passed to fragment shader & vertex shader.</p>
        </div>
        <div className='relative my-12 h-96 w-full py-6 sm:w-1/2 md:mb-40'>
          <Canvas camera={{ fov: 10, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card />
            </Suspense>
          </Canvas>
        </div> */}
      </div>
      <div class="w-5/6 m-auto" >
        <div class="flex flex-row m-auto" style={{ height: 20 + 'rem' }}>
          <Canvas camera={{ fov: 6, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card
                artUrl={"https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG068-origin_forme_dialga_vstar.png"}
                foilUrl={"https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG068-origin_forme_dialga_vstar-std.png"}
              />
            </Suspense>
          </Canvas>
          <Canvas camera={{ fov: 6, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card
                artUrl={"https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG070-arceus_vstar.png"}
                foilUrl={"https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG070-arceus_vstar-std.png"}
              />
            </Suspense>
          </Canvas>
          <Canvas camera={{ fov: 6, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card
                artUrl={"https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG067-origin_forme_palkia_vstar.png"}
                foilUrl={"https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG067-origin_forme_palkia_vstar-std.png"}
              />
            </Suspense>
          </Canvas>
        </div>
        <div class="flex flex-row m-auto" style={{ height: 20 + 'rem' }}>
          <Canvas camera={{ fov: 6, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card
                artUrl={"https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG056-hisuian_zoroark_vstar.png"}
                foilUrl={"https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG056-hisuian_zoroark_vstar-std.png"}
              />
            </Suspense>
          </Canvas>
          <Canvas camera={{ fov: 6, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card
                artUrl={"https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG069-giratina_vstar.png"}
                foilUrl={"https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG069-giratina_vstar-std.png"}
              />
            </Suspense>
          </Canvas>
          <Canvas camera={{ fov: 6, position: [0, 0, 4] }}>
            <Suspense fallback={null}>
              <Card
                artUrl={"https://cdn.malie.io/file/malie-io/art/cards/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG055-regigigas_vstar.png"}
                foilUrl={"https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/CZ-CRZ/en_US-CZ-GG055-regigigas_vstar-std.png"}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  )
}
