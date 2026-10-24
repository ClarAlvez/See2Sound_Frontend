import test from "node:test";
import assert from "node:assert/strict";
import { DEFAULT_SETTINGS, sanitizeSettings } from "../src/lib/accessibilitySettings.js";

test("invalid storage values cannot hide or shrink the interface", () => {
  for (const value of [null, [], "invalid", 42]) {
    assert.deepEqual(sanitizeSettings(value), DEFAULT_SETTINGS);
  }
  assert.equal(sanitizeSettings({ textSize: -500 }).textSize, 100);
  assert.equal(sanitizeSettings({ textSize: 900 }).textSize, 150);
  assert.equal(sanitizeSettings({ textSize: "150", highContrast: "false" }).textSize, 100);
  assert.equal(sanitizeSettings({ highContrast: "false" }).highContrast, false);
});

test("valid preferences survive sanitizing without accepting unknown keys", () => {
  const result = sanitizeSettings({ textSize: 137, reduceMotion: true, unknown: true });
  assert.equal(result.textSize, 140);
  assert.equal(result.reduceMotion, true);
  assert.equal("unknown" in result, false);
  assert.deepEqual(DEFAULT_SETTINGS.textSize, 100);
});
