import { Component, Suspense } from "react";
import useBackgroundEffects from "../hooks/useBackgroundEffects";

class EffectBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function DecorativeEffect({ children }) {
  const enabled = useBackgroundEffects();
  return enabled ? (
    <EffectBoundary><Suspense fallback={null}>{children}</Suspense></EffectBoundary>
  ) : null;
}
