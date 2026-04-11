import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolveSiteUrlFromProcessEnv } from "./src/config/siteUrlConstants";
import { injectSiteUrlPlugin } from "./vite/injectSiteUrlPlugin";
import { sitemapRobotsPlugin } from "./vite/sitemapRobotsPlugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = resolveSiteUrlFromProcessEnv(env);

  return {
    plugins: [react(), tailwindcss(), injectSiteUrlPlugin(siteUrl), sitemapRobotsPlugin(siteUrl)],
  };
});
