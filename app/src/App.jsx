import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";

const PAGE_TITLES = {
  "/": "See2Sound — imagens que todos podem ouvir",
  "/download": "Plataforma | See2Sound",
};

function RouteAccessibility() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? "Página não encontrada | See2Sound";
    const description = location.pathname === "/download"
      ? "Confira a disponibilidade do aplicativo See2Sound para macOS, Windows e Linux."
      : "Conheça o See2Sound, projeto de geração automática de audiodescrição contextualizada com inteligência artificial.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    let frame;

    const targetId = location.hash.replace("#", "");
    if (targetId) {
      frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ block: "start" });
        target?.focus({ preventScroll: true });
      });
    } else if (!isFirstRender.current) {
      window.scrollTo({ top: 0, behavior: "auto" });
      frame = window.requestAnimationFrame(() => {
        document.querySelector("main h1")?.focus({ preventScroll: true });
      });
    }

    isFirstRender.current = false;
    return () => window.cancelAnimationFrame(frame);
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
