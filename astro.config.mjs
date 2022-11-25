import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://baezor.io",
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
});
