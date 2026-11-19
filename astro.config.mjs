// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://www.fabiosilva.design",
  // Keep the same URLs as the current site (/cv, /redesign_tw, …)
  trailingSlash: "ignore",
  build: { format: "directory" },
});
