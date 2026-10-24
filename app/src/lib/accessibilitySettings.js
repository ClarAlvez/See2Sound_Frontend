export const STORAGE_KEY = "see2sound-accessibility";
export const DEFAULT_SETTINGS = {
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

export function sanitizeSettings(saved) {
  const settings = { ...DEFAULT_SETTINGS };
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) return settings;
  for (const key of Object.keys(settings)) {
    if (key === "textSize") {
      if (Number.isFinite(saved[key])) {
        settings[key] = Math.min(150, Math.max(100, Math.round(saved[key] / 10) * 10));
      }
    } else if (typeof saved[key] === "boolean") {
      settings[key] = saved[key];
    }
  }
  return settings;
}
