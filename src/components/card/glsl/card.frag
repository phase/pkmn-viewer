precision mediump float;

uniform vec3 uColor;
uniform float uTime;
uniform sampler2D uTexture;
uniform sampler2D uFoil;

varying vec2 vUv;
varying vec3 shared_pos;
varying float bend;

void main() {
  vec2 uv = vUv;
  vec4 c = vec4(texture2D(uTexture, uv).rgb, 1.0);

  // foil texture
  vec3 foilColor = texture2D(uFoil, uv).rgb;
  float sfg = min(1.0, foilColor.g * 2.0);
  vec4 f = vec4(sfg, sfg, sfg - 0.25, 1.0);
  gl_FragColor = mix(c, f, shared_pos.z);

  float b = (sin(uTime) + 1.0) / 2.0;
  float bx = (1.0-abs(b - uv.x));
  float a = bx / 4.0;//bx > 0.8 ? bx - 0.7 : 0.0;
  gl_FragColor = vec4(a, 0.0, 0.0, 1.0);


  gl_FragColor = clamp(c + (f*a), 0., 1.);//mix(c, f, a);
}
