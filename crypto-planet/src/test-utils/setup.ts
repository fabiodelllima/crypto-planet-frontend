import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

/**
 * Manual cleanup is required because @testing-library/react's auto-cleanup
 * hook only activates when Vitest globals are enabled. We keep globals off
 * to preserve explicit imports and satisfy noUnusedLocals.
 *
 * localStorage is also cleared here because AuthProvider uses it for
 * persistence and multiple tests would otherwise leak state between runs.
 */
afterEach(() => {
  cleanup();
  localStorage.clear();
});
