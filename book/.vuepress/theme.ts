import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // hostname: "",
  iconAssets: "fontawesome-with-brands",
  // logo: "",
  repo: "Alex6357/freebsd-book",
  repoLabel: "GitHub",
  docsDir: "book",
  navbar,
  navbarLayout: {
    start: ["Brand"],
    end: ["Search", "Repo", "Outlook"]
  },
  sidebar,
  footer: "Alex11 的 FreeBSD 手册",
  copyright: "全文以 CC BY 4.0 发布",
  displayFooter: true,
  hotReload: true,
  headerDepth: 4,
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "Alex6357/freebsd-book",
      repoId: "R_kgDOLF-e-A",
      category: "Q&A",
      categoryId: "DIC_kwDOLF-e-M4Ccghp",
      mapping: "title",
    },
    searchPro: {
      indexContent: true,
    },
    copyright: {
      author: " Alex11 ",
      license: " CC BY 4.0 ",
      global: true
    },
    mdEnhance: {
      figure: true,
      hint: true,
    },
    prismjs: false,
  },
});
