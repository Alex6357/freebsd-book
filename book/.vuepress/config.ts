import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/freebsd-book/",
  lang: "zh-CN",
  title: "Alex11 的 FreeBSD 手册",
  description: "Alex11 的 FreeBSD 手册",
  markdown: {
    headers: {
      level: [2, 3, 4],
    }
  },
  plugins: [
    shikiPlugin({
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
      langs: [
        'shellsession',
        'text',
      ],
    }),
  ],
  theme,
  bundler: viteBundler({
    viteOptions: {
      server: {
        host: "localhost",
      },
    },
    vuePluginOptions: {},
  }),
});
