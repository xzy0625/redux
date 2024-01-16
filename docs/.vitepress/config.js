import { headerPlugin } from './headerPlugin'
import { sidebar } from './sidebar'

export default {
  title: "redux", // 博客的标题
  description: "", // 博客的介绍
  base: "/redux/", // 根路径,如果想用github.io访问这个必填，需和github仓库名字一致 【https://vitejs.cn/vitepress/guide/deploy.html#github-pages-%E5%92%8C-travis-ci】
  lastUpdated: true, // 开启最后更新时间
  themeConfig: {
    logo: "/images/logo.png", // 页面上显示的logo
    algolia: {
      appId: '0URKHID7AP', // algolia appid, 请自行前往申请 https://dashboard.algolia.com/account/plan/create?planName=grow
      apiKey: 'd254cc181b9033775852a38514af4aa4', // algolia apiKey, 请自行前往申请
      indexName: 'redux', // algolia indexName, 请自行前往申请
      placeholder: '请输入关键词',
      buttonText: '搜索',
    },
    nav: [
      // 页面右上角的导航
      { text: "blog1", link: "/blogs/blog1/" },
      { text: "blog2", link: "/blogs/blog2/" },
      {
        text: "其他",
        items: [
          // 可以配置成下拉
          { text: "Changelog", link: "/others/changelog" },
          { text: "Contribution", link: "/others/contribution" },
        ],
      },
    ],
    sidebar,
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present redux'
    },
    lastUpdatedText: "最近更新时间",
    // 编辑连接
    editLink: {
      pattern: "https://github.com/xzy0625/redux/tree/master/docs/:path", // 这里换成自己的github连接
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/xzy0625/redux" }], // 可以连接到 github
  },
  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },
};
