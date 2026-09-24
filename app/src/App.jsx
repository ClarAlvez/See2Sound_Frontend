import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";

const PAGE_TITLES = {
  "/": "See2Sound — imagens que todos podem ouvir",
  "/download": "Plataforma | See2Sound",
};

function RouteAccessibility() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? "See2Sound";

    const targetId = location.hash.replace("#", "");
    if (targetId) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ block: "start" });
        target?.focus({ preventScroll: true });
      });
    } else if (!isFirstRender.current) {
      window.scrollTo({ top: 0, behavior: "auto" });
      window.requestAnimationFrame(() => {
        document.querySelector("main h1")?.focus({ preventScroll: true });
      });
    }

    isFirstRender.current = false;
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <RouteAccessibility />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </>
  );
}

export default App;
