import { lazy } from "react";
import DecorativeEffect from "./DecorativeEffect";
const LiquidEther = lazy(() => import("./LiquidEther"));

function DownloadLiquidBackground() {
  return (
    <div className="download-liquid-background">
      <DecorativeEffect><LiquidEther
        colors={["#9B36FF", "#5525CE", "#2500DE"]}
        mouseForce={20}
        cursorSize={130}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.45}
        autoIntensity={2.4}
        takeoverDuration={0.25}
        autoResumeDelay={2500}
        autoRampDuration={0.6}
      /></DecorativeEffect>
    </div>
  );
}

export default DownloadLiquidBackground;
