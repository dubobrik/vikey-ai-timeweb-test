import { useEffect, useRef, useState } from "react";

/**
 * The viewer loads only after its hero slot enters the viewport.
 * Drag with mouse/touch to inspect; automatic rotation resumes after interaction.
 */
export default function InteractiveVLogo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const [activated, setActivated] = useState(false);
  const [retry, setRetry] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting) setActivated(true);
    }, { rootMargin: "100px" });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activated || !mountRef.current) return;
    let alive = true;
    let cleanup = () => {};
    const mount = mountRef.current;
    setStatus("loading");

    (async () => {
      const THREE = await import("three");
      const [{ GLTFLoader }, { OrbitControls }] = await Promise.all([
        import("three/addons/loaders/GLTFLoader.js"),
        import("three/addons/controls/OrbitControls.js"),
      ]);
      if (!alive) return;

      const renderer = new THREE.WebGLRenderer({
        alpha: true, antialias: true, powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.cssText =
        "width:100%;height:100%;display:block;touch-action:none;cursor:grab";
      mount.appendChild(renderer.domElement);

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
      controls.autoRotate = false;
      controls.autoRotateSpeed = 5; // one 360-degree revolution in ~12 seconds

      let resumeTimer: ReturnType<typeof setTimeout> | undefined;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let interacting = false;
      let modelReady = false;
      const startInteraction = () => {
        interacting = true;
        controls.autoRotate = false;
        if (resumeTimer) clearTimeout(resumeTimer);
      };
      const endInteraction = () => {
        interacting = false;
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
          if (alive && modelReady && !interacting && !reducedMotion.matches) {
            controls.autoRotate = true;
          }
        }, 2000);
      };
      controls.addEventListener("start", startInteraction);
      controls.addEventListener("end", endInteraction);

      const resize = () => {
        if (!alive) return;
        const size = Math.max(1, mount.clientWidth);
        renderer.setSize(size, size, false);
        camera.updateProjectionMatrix();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(mount);
      resize();

      let frame = 0;
      const clock = new THREE.Clock();
      const tick = () => {
        if (!alive) return;
        frame = requestAnimationFrame(tick);
        const delta = Math.min(clock.getDelta(), 0.05);
        if (!modelReady || !visibleRef.current || document.hidden) return;
        if (reducedMotion.matches) controls.autoRotate = false;
        controls.update(delta);
        renderer.render(scene, camera);
      };

      cleanup = () => {
        cancelAnimationFrame(frame);
        if (resumeTimer) clearTimeout(resumeTimer);
        observer.disconnect();
        controls.removeEventListener("start", startInteraction);
        controls.removeEventListener("end", endInteraction);
        controls.dispose();
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
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
          controls.target.set(0, 0, 0);
          camera.lookAt(0, 0, 0);
          controls.update();
          modelReady = true;
          controls.autoRotate = !reducedMotion.matches;
          renderer.render(scene, camera);
          setStatus("ready");
        },
        undefined,
        () => { if (alive) setStatus("error"); },
      );
      tick();
    })().catch(() => { if (alive) setStatus("error"); });

    return () => { alive = false; cleanup(); };
  }, [activated, retry]);

  return (
    <div ref={wrapperRef} className="flex w-28 shrink-0 flex-col items-center gap-1 sm:w-32" aria-label="Автоматически вращающийся 3D-логотип Vikey AI">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#8B7BC8]/40 bg-card/40 shadow-glow sm:h-28 sm:w-28">
        {activated && <div ref={mountRef} className="h-full w-full" aria-label="Поворачивайте логотип мышью или пальцем" />}
        {status !== "ready" && status !== "error" && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-card/40 text-neon">
            <span className="font-display text-4xl font-semibold">V</span>
            <span className="text-[10px]">{status === "loading" ? "Загрузка 3D…" : "3D-логотип"}</span>
          </div>
        )}
        {status === "error" && (
          <button type="button" className="absolute inset-0 bg-card px-2 text-xs text-neon" onClick={() => setRetry((n) => n + 1)}>
            Не удалось загрузить 3D. Повторить
          </button>
        )}
      </div>
      <span className="text-center text-[10px] leading-tight text-muted-foreground">
        {status === "ready" ? "Вращается · можно повернуть" : "Логотип Vikey AI"}
      </span>
    </div>
  );
}
