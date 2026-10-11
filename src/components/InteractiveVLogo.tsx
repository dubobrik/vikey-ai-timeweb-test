import { useEffect, useRef, useState } from "react";

/** Model and WebGL engine are fetched only after the visitor asks to interact. */
export default function InteractiveVLogo() {
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !mountRef.current) return;
    let alive = true;
    let dispose = () => {};
    const mount = mountRef.current;
    setStatus("loading");

    (async () => {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
      const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
      if (!alive) return;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.setClearColor(0x000000, 0);
      const scene = new THREE.Scene();
      scene.add(new THREE.HemisphereLight(0xffffff, 0x65538d, 2.7));
      const key = new THREE.DirectionalLight(0xffffff, 3.2);
      key.position.set(1, 2, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xcbb3ff, 1.5);
      fill.position.set(-2, 1, -2);
      scene.add(fill);
      const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 20);
      camera.position.set(0, 0, 0.55);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.07;
      controls.rotateSpeed = 0.8;
      renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab";
      mount.appendChild(renderer.domElement);
      const observer = new ResizeObserver(() => {
        if (!alive) return;
        const size = Math.max(1, mount.clientWidth);
        renderer.setSize(size, size, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      });
      observer.observe(mount);

      let frame = 0;
      const tick = () => {
        if (!alive) return;
        frame = requestAnimationFrame(tick);
        controls.update();
        renderer.render(scene, camera);
      };
      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        controls.dispose();
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
              if (!material) continue;
              for (const value of Object.values(material)) {
                if (value instanceof THREE.Texture) value.dispose();
              }
              material.dispose();
            }
          }
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
      new GLTFLoader().load(
        "/models/vikey-v-logo.glb",
        (gltf) => {
          if (!alive) return;
          const model = gltf.scene;
          const bounds = new THREE.Box3().setFromObject(model);
          const center = bounds.getCenter(new THREE.Vector3());
          model.position.sub(center);
          const largest = Math.max(...bounds.getSize(new THREE.Vector3()).toArray());
          if (largest > 0) model.scale.setScalar(0.22 / largest);
          scene.add(model);
          camera.lookAt(0, 0, 0);
          controls.target.set(0, 0, 0);
          controls.update();
          setStatus("ready");
        },
        undefined,
        () => { if (alive) setStatus("error"); },
      );
      tick();
    })().catch(() => { if (alive) setStatus("error"); });

    return () => { alive = false; dispose(); };
  }, [enabled]);

  return (
    <div className="flex w-28 shrink-0 flex-col items-center gap-1 sm:w-32" aria-label="Интерактивный трёхмерный логотип Vikey AI">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#8B7BC8]/40 bg-card/40 shadow-glow sm:h-28 sm:w-28">
        {enabled ? <div ref={mountRef} className="h-full w-full" /> : null}
        {!enabled && (
          <button type="button" onClick={() => setEnabled(true)} className="flex h-full w-full flex-col items-center justify-center gap-0.5 text-neon transition hover:bg-card/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon" aria-label="Загрузить и вращать 3D-логотип">
            <span className="font-display text-4xl font-semibold">V</span><span className="text-[10px]">Открыть 3D</span>
          </button>
        )}
        {enabled && status === "loading" && <div className="pointer-events-none absolute inset-0 grid place-items-center bg-card/65 text-xs text-neon">Загрузка 3D…</div>}
        {enabled && status === "error" && <button type="button" className="absolute inset-0 bg-card text-xs text-neon" onClick={() => { setEnabled(false); setStatus("idle"); }}>Не удалось загрузить. Повторить</button>}
      </div>
      <span className="text-center text-[10px] leading-tight text-muted-foreground">{status === "ready" ? "Вращайте мышью или пальцем" : "Интерактивный логотип"}</span>
    </div>
  );
}
