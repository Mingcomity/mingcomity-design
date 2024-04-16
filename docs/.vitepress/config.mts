import { defineConfig } from "vitepress";
import { footer, nav, sidebar } from "./.config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mingcomity-design",
  description: "Mingcomity-design-docs",
  themeConfig: {
    logo: "/images/logo.svg",
    nav,
    footer,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/mingcomity" }],
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/images/logo.svg",
      },
    ],
  ],
});
