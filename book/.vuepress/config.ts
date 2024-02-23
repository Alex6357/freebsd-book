import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Alex11 的 FreeBSD 手册",
  description: "Alex11 的 FreeBSD 手册",

  theme,
});