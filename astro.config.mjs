import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://grupoliber.com.mx",
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
});
