import { useEffect, useState } from "react";

const DEFAULT_SETTINGS = {
  audioDescription: false,
  narrationVolume: 70,
  speechSpeed: 1,
  highContrast: false,
  visualFocus: false,
  textSize: 100,
};

function AccessibilityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("see2sound-accessibility");

    if (savedSettings) {
      return JSON.parse(savedSettings);
    }

    return DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem("see2sound-accessibility", JSON.stringify(settings));

    document.body.classList.toggle("high-contrast", settings.highContrast);
    document.body.classList.toggle("visual-focus", settings.visualFocus);

    document.documentElement.style.setProperty(
      "--accessibility-font-scale",
      `${settings.textSize}%`
    );
  }, [settings]);

  function updateSetting(key, value) {
    setSettings((currentSettings) => ({
      ...currentSettings,
      [key]: value,
    }));
  }

  function resetSettings() {
    setSettings(DEFAULT_SETTINGS);
  }

  return (
    <div className="accessibility-dropdown">
      <button
        className="navbar-button accessibility-trigger"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Acessibilidade
      </button>

      {isOpen && (
        <div className="accessibility-panel">
          <div className="accessibility-header">
            <div>
              <span className="accessibility-eyebrow">Preferências</span>
              <h2>Acessibilidade</h2>
            </div>

            <button
              className="accessibility-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu de acessibilidade"
            >
              ×
            </button>
          </div>

          <div className="accessibility-options">
            <label className="accessibility-option">
              <div>
                <strong>Modo Audiodescrição</strong>
                <span>Prioriza recursos narrativos no See2Sound.</span>
              </div>

              <input
                type="checkbox"
                className="toggle-input"
                checked={settings.audioDescription}
                onChange={(event) =>
                  updateSetting("audioDescription", event.target.checked)
                }
              />
            </label>

            <label className="accessibility-option range-option">
              <div>
                <strong>Volume da Narração</strong>
                <span>{settings.narrationVolume}%</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={settings.narrationVolume}
                onChange={(event) =>
                  updateSetting("narrationVolume", Number(event.target.value))
                }
              />
            </label>

            <label className="accessibility-option range-option">
              <div>
                <strong>Velocidade da Fala</strong>
                <span>{settings.speechSpeed.toFixed(1)}x</span>
              </div>

              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={settings.speechSpeed}
                onChange={(event) =>
                  updateSetting("speechSpeed", Number(event.target.value))
                }
              />
            </label>

            <label className="accessibility-option">
              <div>
                <strong>Alto Contraste</strong>
                <span>Aumenta a diferença entre fundo e texto.</span>
              </div>

              <input
                type="checkbox"
                className="toggle-input"
                checked={settings.highContrast}
                onChange={(event) =>
                  updateSetting("highContrast", event.target.checked)
                }
              />
            </label>

            <label className="accessibility-option">
              <div>
                <strong>Foco Visual</strong>
                <span>Destaca elementos ao navegar pelo teclado.</span>
              </div>

              <input
                type="checkbox"
                className="toggle-input"
                checked={settings.visualFocus}
                onChange={(event) =>
                  updateSetting("visualFocus", event.target.checked)
                }
              />
            </label>

            <label className="accessibility-option range-option">
              <div>
                <strong>Tamanho do Texto</strong>
                <span>{settings.textSize}%</span>
              </div>

              <input
                type="range"
                min="90"
                max="130"
                step="5"
                value={settings.textSize}
                onChange={(event) =>
                  updateSetting("textSize", Number(event.target.value))
                }
              />
            </label>
          </div>

          <div className="accessibility-footer">
            <button className="reset-accessibility" onClick={resetSettings}>
              Restaurar padrão
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccessibilityDropdown;