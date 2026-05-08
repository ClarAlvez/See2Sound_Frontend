import LiquidEther from "./LiquidEther";

function AboutLiquidBackground() {
  return (
    <div className="about-liquid-background">
      <LiquidEther
        colors={["#8E26CF", "#5525CE"]}
        mouseForce={24}
        cursorSize={140}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.6}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.55}
        autoIntensity={2.8}
        takeoverDuration={0.25}
        autoResumeDelay={2200}
        autoRampDuration={0.6}
        />
    </div>
  );
}

export default AboutLiquidBackground;