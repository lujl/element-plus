module.exports = {
  title: 'Element Plus',
  description: '基于Element UI封装, 简化部分组件使用',
  base: '/element-plus',
  host: 'localhost',
  port: '9000',
  extraWatchFiles: [
    '**/*.js',
    '**/*.vue'
  ],
  themeConfig: {
    repo: 'lujl/element-plus',
    repoLabel: '查看源码',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' }
    ],
    displayAllHeaders: true,
    sidebar: {
      '/components/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            'select'
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}
