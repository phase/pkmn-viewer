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
  vec4 f = vec4(sfg - clamp(bend * uv.x - 0.5, -1., 1.), sfg + clamp(bend * uv.y - 0.5, -1., 1.), sfg - clamp(bend, -0.05, 0.25), 1.0);
  gl_FragColor = mix(c, f, shared_pos.z);

  float b = (bend + 1.0) / 2.0;
  float bx = (1.0-abs(b - uv.x));
  float a = bx / 2.0;//bx > 0.8 ? bx - 0.7 : 0.0;
  vec4 foil_with_color = (f*a*.3);
  gl_FragColor = vec4(a, 0.0, 0.0, 1.0);


  gl_FragColor = clamp(c + (f*a*.5), 0., 1.);//mix(c, f, a);
  //gl_FragColor = f*a*0.75;

  float char_mask = 1.-foilColor.g > 0.99 ? 1.-foilColor.g : 0.;
  vec4 mask_color = vec4(char_mask,char_mask,char_mask,1.);
  vec4 top_glisten_mask = (c * (mask_color / 2.0) * ((sin(uTime*uv.x*uv.y)+1.)*0.5) * 0.1);
  gl_FragColor = c + top_glisten_mask + foil_with_color;
}
