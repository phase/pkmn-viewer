precision mediump float;

varying vec2 vUv;
varying float bend;
varying vec3 shared_pos;
uniform float uTime;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

void main() {
  vUv = uv;
  vec3 pos = position;

  bend = sin(uTime) / 2.0;
  shared_pos = pos;
  pos.z = mix(pos.x, -pos.x, bend) / 2.0 + mix(-pos.y / 4.0, 0.0, bend);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
