import { useEffect, useState } from "react";

// Unmount decorative renderers so hidden effects do not keep using the GPU.
function effectsAllowed() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !document.body.matches(".reduce-motion, .disable-background-effects, .high-contrast");
}

export default function useBackgroundEffects() {
  const [enabled, setEnabled] = useState(effectsAllowed);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(effectsAllowed());
    const observer = new MutationObserver(update);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    media.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);
  return enabled;
}
