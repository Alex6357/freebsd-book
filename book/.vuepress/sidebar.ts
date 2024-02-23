import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: 'Alex11 的 FreeBSD 手册',
      link: '/'
    },
    {
      text: '前言',
      prefix: "/preface/",
      collapsible: true,
      children: [
        'to-beginners'
      ],
    },
    {
      text: '第一章  开始',
      prefix: "/begin/",
      collapsible: true,
      children: [
        'what-is-freebsd',
        'freebsd-basic'
      ]
    },
    {
      text: '第二章 安装 FreeBSD',
      prefix: "/installation/",
      collapsible: true,
      children: [
        'which-file-should-i-choose',
        'installation-13',
        'installation-14'
      ]
    }
  ],
});
