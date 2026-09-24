import { useEffect, useRef, useState } from "react";
import { Accessibility } from "lucide-react";
import "../styles/AccessibilityDropdown.css";

const STORAGE_KEY = "see2sound-accessibility";

const DEFAULT_SETTINGS = {
  highContrast: false,
  visualFocus: false,
  textSize: 100,
  readableFont: false,
  textSpacing: false,
  underlineLinks: false,
  largeCursor: false,
  reduceMotion: false,
  disableBackgroundEffects: false,
  softBackgroundEffects: false,
};

const settingNames = {
  highContrast: "Alto contraste",
  visualFocus: "Foco visual reforçado",
  readableFont: "Fonte legível",
  textSpacing: "Espaçamento de texto",
  underlineLinks: "Sublinhar links",
  largeCursor: "Cursor ampliado",
  reduceMotion: "Reduzir animações",
  softBackgroundEffects: "Reduzir fundos animados",
  disableBackgroundEffects: "Remover efeitos de fundo",
};

function readSavedSettings() {
  try {
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    return savedSettings
      ? { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) }
      : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function AccessibilityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(readSavedSettings);
  const [announcement, setAnnouncement] = useState("");
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // As preferências ainda funcionam nesta sessão quando o armazenamento é bloqueado.
    }

    const classSettings = {
      "high-contrast": settings.highContrast,
      "visual-focus": settings.visualFocus,
      "readable-font": settings.readableFont,
      "text-spacing": settings.textSpacing,
      "underline-links": settings.underlineLinks,
      "large-cursor": settings.largeCursor,
      "reduce-motion": settings.reduceMotion,
      "disable-background-effects": settings.disableBackgroundEffects,
      "soft-background-effects": settings.softBackgroundEffects,
    };

    Object.entries(classSettings).forEach(([className, enabled]) => {
      document.body.classList.toggle(className, enabled);
    });
    document.documentElement.style.fontSize = `${settings.textSize}%`;
  }, [settings]);

  useEffect(() => {
    if (!isOpen) return undefined;

    window.requestAnimationFrame(() => closeRef.current?.focus());

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  function updateSetting(key, value) {
    setSettings((currentSettings) => ({ ...currentSettings, [key]: value }));

    if (key === "textSize") {
      setAnnouncement(`Tamanho do texto: ${value} por cento.`);
    } else {
      setAnnouncement(`${settingNames[key]} ${value ? "ativado" : "desativado"}.`);
    }
  }

  function resetSettings() {
    setSettings(DEFAULT_SETTINGS);
    setAnnouncement("Preferências de acessibilidade restauradas.");
  }

  const toggleOptions = [
    {
      key: "highContrast",
      title: "Alto contraste",
      description: "Aumenta o contraste entre fundo, textos e controles.",
    },
    {
      key: "visualFocus",
      title: "Foco visual reforçado",
      description: "Amplia ainda mais o destaque ao navegar com Tab.",
    },
    {
      key: "readableFont",
      title: "Fonte legível",
      description: "Usa uma fonte simples e diferencia melhor as letras.",
    },
    {
      key: "textSpacing",
      title: "Espaçamento de texto",
      description: "Aumenta o espaço entre letras, palavras e linhas.",
    },
    {
      key: "underlineLinks",
      title: "Sublinhar links",
      description: "Identifica links sem depender apenas da cor.",
    },
    {
      key: "largeCursor",
      title: "Cursor ampliado",
      description: "Aumenta o cursor para facilitar sua localização.",
    },
    {
      key: "reduceMotion",
      title: "Reduzir animações",
      description: "Remove movimentos e transições não essenciais.",
    },
    {
      key: "softBackgroundEffects",
      title: "Suavizar fundos animados",
      description: "Diminui a intensidade visual dos efeitos de fundo.",
    },
    {
      key: "disableBackgroundEffects",
      title: "Remover efeitos de fundo",
      description: "Oculta completamente os fundos animados decorativos.",
    },
  ];

  return (
    <div className="accessibility-dropdown" ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        className="navbar-button accessibility-trigger"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="painel-acessibilidade"
        aria-haspopup="dialog"
      >
        <Accessibility size={20} aria-hidden="true" />
        Acessibilidade
      </button>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>

      {isOpen && (
        <section
          id="painel-acessibilidade"
          className="accessibility-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="titulo-acessibilidade"
          aria-describedby="descricao-acessibilidade"
        >
          <div className="accessibility-header">
            <div>
              <span className="accessibility-eyebrow">Preferências</span>
              <h2 id="titulo-acessibilidade">Acessibilidade</h2>
            </div>

            <button
              ref={closeRef}
              type="button"
              className="accessibility-close"
              onClick={() => {
                setIsOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Fechar painel de acessibilidade"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <p id="descricao-acessibilidade" className="accessibility-intro">
            O site usa títulos, regiões e controles compatíveis com leitores de tela.
            Use Tab para avançar, Shift + Tab para voltar e Enter para ativar.
          </p>

          <div className="accessibility-options">
            <label className="accessibility-option range-option" htmlFor="text-size">
              <div>
                <strong>Tamanho do texto</strong>
                <output htmlFor="text-size">{settings.textSize}%</output>
              </div>

              <input
                id="text-size"
                type="range"
                min="100"
                max="150"
                step="10"
                value={settings.textSize}
                aria-describedby="text-size-help"
                onChange={(event) =>
                  updateSetting("textSize", Number(event.target.value))
                }
              />
              <span id="text-size-help">Use as setas para ajustar de 100% a 150%.</span>
            </label>

            {toggleOptions.map((option) => (
              <label className="accessibility-option" key={option.key}>
                <span className="accessibility-option-copy">
                  <strong>{option.title}</strong>
                  <span id={`${option.key}-help`}>{option.description}</span>
                </span>

                <input
                  type="checkbox"
                  className="toggle-input"
                  checked={settings[option.key]}
                  aria-describedby={`${option.key}-help`}
                  onChange={(event) =>
                    updateSetting(option.key, event.target.checked)
                  }
                />
              </label>
            ))}
          </div>

          <div className="accessibility-footer">
            <button type="button" className="reset-accessibility" onClick={resetSettings}>
              Restaurar preferências
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default AccessibilityDropdown;
