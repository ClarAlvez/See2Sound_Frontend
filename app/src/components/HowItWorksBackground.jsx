import Threads from "./Threads";

function HowItWorksBackground() {
  return (
    <div className="how-it-works-background">
          <Threads
            color={[0.26666666666666666,0.08235294117647059,1]}
            amplitude={1.5}
            distance={0}
            enableMouseInteraction={false}
        />
    </div>
  );
}

export default HowItWorksBackground;