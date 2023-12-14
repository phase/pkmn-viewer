precision mediump float;

varying vec2 vUv;
varying float vWave;

uniform float uTime;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);


void main() {
  vUv = uv;

  vec3 pos = position;
//  float noiseFreq = 2.0;
//  float noiseAmp = 0.4;
//  vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
  //pos.z += snoise3(noisePos) * noiseAmp;
  pos.z = mix(pos.x / 2.0, -pos.x / 2.0, sin(uTime / 4.0));
  //pos.z = pos.x;
//  vWave = pos.z;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
