import { defineConfig } from "astro/config";
import { sanityIntegration as sanity } from "@sanity/astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: "xwlevetc",
      dataset: "production",
      apiVersion: "2024-01-27",
      useCdn: false,
    }),
    react(),
    tailwind({
      nesting: true,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
});
