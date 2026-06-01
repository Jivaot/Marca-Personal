import * as THREE from "three";

export function initShaderBackground({ prefersReducedMotion }) {
  if (prefersReducedMotion || window.innerWidth < 720) return;

  const canvas = document.createElement("canvas");
  canvas.className = "webgl-background";
  document.body.prepend(canvas);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const geometry = new THREE.PlaneGeometry(2, 2);

  const material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    },
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;

      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;

      float circle(vec2 uv, vec2 position, float radius) {
        float distanceToPosition = distance(uv, position);
        return smoothstep(radius, radius - 0.35, distanceToPosition);
      }

      float grid(vec2 uv, float scale) {
        vec2 gridUv = fract(uv * scale);
        vec2 lines = smoothstep(0.0, 0.015, gridUv) * smoothstep(0.0, 0.015, 1.0 - gridUv);
        return 1.0 - min(lines.x, lines.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 p = uv - 0.5;
        p.x *= uResolution.x / uResolution.y;

        float waveA = sin(p.x * 7.0 + uTime * 0.45) * 0.08;
        float waveB = cos(p.y * 9.0 - uTime * 0.35) * 0.08;

        vec3 base = vec3(0.015, 0.016, 0.035);

        vec3 cyan = vec3(0.03, 0.78, 0.95);
        vec3 violet = vec3(0.42, 0.18, 0.95);
        vec3 pink = vec3(0.95, 0.16, 0.55);

        float cyanGlow = circle(p + vec2(waveA, waveB), vec2(-0.38, 0.18), 0.58);
        float violetGlow = circle(p, vec2(0.48, -0.16), 0.64);
        float mouseGlow = circle(uv, uMouse, 0.32);

        float gridLines = grid(uv + vec2(uTime * 0.01, 0.0), 28.0);

        vec3 color = base;
        color += cyan * cyanGlow * 0.18;
        color += violet * violetGlow * 0.18;
        color += mix(cyan, pink, uv.x) * mouseGlow * 0.16;
        color += cyan * gridLines * 0.025;

        float scanline = sin((uv.y + uTime * 0.035) * 700.0) * 0.012;
        color += scanline;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const clock = new THREE.Clock();

  window.addEventListener("mousemove", (event) => {
    material.uniforms.uMouse.value.x = event.clientX / window.innerWidth;
    material.uniforms.uMouse.value.y = 1.0 - event.clientY / window.innerHeight;
  });

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.uResolution.value.set(
      window.innerWidth,
      window.innerHeight
    );
  });

  function animate() {
    material.uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}