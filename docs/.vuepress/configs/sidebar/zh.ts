import type { SidebarConfig } from '@vuepress/theme-default'

// collapsible: true, 左侧菜单是否可以收缩，不配置默认全部展开不可收缩

export const sidebarZh: SidebarConfig = {
  '/about/': [
    {
      text: '关于小东',
      children: [
        '/about/README.md',
        // eslint占位符
      ],
    },
  ],
  '/javaScript/': [
    {
      text: '入门篇',
      collapsible: true,
      children: [
        // '/javascript/basic/introduction',
        // '/javascript/basic/history',
        '/javascript/basic/grammar',
      ],
    },
    {
      text: '数据类型',
      collapsible: true,
      children: [
        '/javascript/types/general',
        '/javascript/types/null-undefined-boolean',
        '/javascript/types/number',
        '/javascript/types/string',
        '/javascript/types/object',
        '/javascript/types/function',
        '/javascript/types/array',
      ],
    },
    {
      text: '运算符',
      collapsible: true,
      children: [
        '/javascript/operators/arithmetic',
        '/javascript/operators/comparison',
        '/javascript/operators/boolean',
        '/javascript/operators/bit',
        '/javascript/operators/priority',
      ],
    },
    {
      text: '语法专题',
      collapsible: true,
      children: [
        '/javascript/features/conversion',
        '/javascript/features/error',
        '/javascript/features/style',
        '/javascript/features/console',
      ],
    },
    {
      text: '标准库',
      collapsible: true,
      children: [
        '/javascript/stdlib/object',
        '/javascript/stdlib/attributes',
        '/javascript/stdlib/array',
        '/javascript/stdlib/wrapper',
        '/javascript/stdlib/boolean',
        '/javascript/stdlib/number',
        '/javascript/stdlib/string',
        '/javascript/stdlib/math',
        '/javascript/stdlib/date',
        '/javascript/stdlib/regexp',
        '/javascript/stdlib/json',
      ],
    },
    {
      text: '面向对象编程',
      collapsible: true,
      children: [
        '/javascript/oop/new',
        '/javascript/oop/this',
        '/javascript/oop/prototype',
        '/javascript/oop/object',
        '/javascript/oop/strict',
      ],
    },
    {
      text: '异步操作',
      collapsible: true,
      children: [
        '/javascript/async/general',
        '/javascript/async/timer',
        '/javascript/async/promise',
      ],
    },
    {
      text: 'DOM',
      collapsible: true,
      children: [
        '/javascript/dom/general',
        '/javascript/dom/node',
        '/javascript/dom/nodelist',
        '/javascript/dom/parentnode',
        '/javascript/dom/document',
        '/javascript/dom/element',
        '/javascript/dom/attributes',
        '/javascript/dom/text',
        '/javascript/dom/css',
        '/javascript/dom/mutationobserver',
      ],
    },
    {
      text: '事件',
      collapsible: true,
      children: [
        '/javascript/events/eventtarget',
        '/javascript/events/model',
        '/javascript/events/event',
        '/javascript/events/mouse',
        '/javascript/events/keyboard',
        '/javascript/events/progress',
        '/javascript/events/form',
        '/javascript/events/touch',
        '/javascript/events/drag',
        '/javascript/events/common',
        '/javascript/events/globaleventhandlers',
      ],
    },
    {
      text: '浏览器模型',
      collapsible: true,
      children: [
        '/javascript/bom/engine',
        '/javascript/bom/window',
        '/javascript/bom/navigator',
        '/javascript/bom/cookie',
        '/javascript/bom/xmlhttprequest',
        '/javascript/bom/same-origin',
        '/javascript/bom/cors',
        '/javascript/bom/storage',
        '/javascript/bom/history',
        '/javascript/bom/location',
        '/javascript/bom/arraybuffer',
        '/javascript/bom/file',
        '/javascript/bom/form',
        '/javascript/bom/indexeddb',
        '/javascript/bom/webworker',
      ],
    },
    {
      text: '网页元素接口',
      collapsible: true,
      children: [
        '/javascript/elements/a',
        '/javascript/elements/image',
        '/javascript/elements/form',
        '/javascript/elements/input',
        '/javascript/elements/button',
        '/javascript/elements/option',
        '/javascript/elements/video',
      ],
    },
  ],
  '/TScript/': [
    {
      text: '基础篇',
      collapsible: true,
      children: [
        '/TScript/basics/TypeScript.md',
        // eslint占位符
      ],
    },
    {
      text: '待更新',
      collapsible: true,
      children: [
        // eslint占位符
      ],
    },
  ],
  '/web/': [
    {
      text: 'Vue',
      children: ['/web/vue2/basics.md', '/web/vue3/basics.md'],
    },
    {
      text: 'React基础',
      collapsible: true,
      children: [
        '/web/react/basics.md',
        // eslint占位符
      ],
    },
    {
      text: 'webpack',
      collapsible: true,
      children: [
        '/web/webpack/demo.md',
        // eslint占位符
      ],
    },
    {
      text: 'vite',
      collapsible: true,
      children: [
        '/web/vite/demo.md',
        // eslint占位符
      ],
    },
    {
      text: 'ECMAScript6~13', // ECMAScript
      children: [
        '/web/ECMAScript/ES6',
        '/web/ECMAScript/ES7',
        '/web/ECMAScript/ES8',
        '/web/ECMAScript/ES9',
        '/web/ECMAScript/ES10',
        '/web/ECMAScript/ES11',
        '/web/ECMAScript/ES12',
        '/web/ECMAScript/ES13',
      ],
    },
  ],
  '/java/': [
    {
      text: '待更新',
      collapsible: true,
      children: [
        // eslint占位符
      ],
    },
  ],
  '/algorithm/': [
    {
      text: '算法',
      collapsible: true,
      children: [
        {
          text: 'Vue2源码分析',
          children: [
            {
              text: 'render (渲染流程)',
              link: '/algorithm/vue2/render.md',
            },
            {
              text: 'reactivity (响应式)',
              link: '/algorithm/vue2/reactivity.md',
            },
            {
              text: 'patch算法',
              link: '/algorithm/vue2/patch',
            },
            {
              text: 'initState',
              link: '/algorithm/vue2/initState.md',
            },
            {
              text: 'initWatch',
              link: '/algorithm/vue2/initWatch.md',
            },
            {
              text: '待更新',
              link: 'https://www.xiaodongsdy.cn/',
            },
          ],
        },
        {
          text: 'Vue3源码分析',
          children: [
            {
              text: '待更新',
              link: 'https://leetcode.cn/',
            },
          ],
        },
        {
          text: 'React源码分析',
          children: [
            {
              text: '待更新',
              link: 'https://leetcode.cn/',
            },
          ],
        },
        {
          text: '原理实现',
          children: [
            {
              text: '实现New',
              link: '/algorithm/axiom/new.md',
            },
            {
              text: '实现instanceOf',
              link: '/algorithm/axiom/instanceOf.md',
            },
            {
              text: '实现async/await',
              link: '/algorithm/axiom/async-await.md',
            },
            {
              text: '实现promiseAll',
              link: '/algorithm/axiom/promiseAll.md',
            },
            {
              text: '待更新',
              link: 'https://leetcode.cn/',
            },
          ],
        },
        {
          text: '算法分析',
          children: [
            {
              text: '二叉树的层序遍历',
              link: '/algorithm/leetCode/treeTraversal.md',
            },
            {
              text: '基础算法',
              link: '/algorithm/leetCode/basicAlgorithm.md',
            },
            {
              text: '待更新',
              link: 'https://leetcode.cn/',
            },
          ],
        },
      ],
    },
  ],
  '/campus/': [
    {
      text: '备战春秋',
      collapsible: true,
      children: [
        '/campus/demo.md',
        // eslint占位符
      ],
    },
    {
      text: '面试题',
      children: [
        {
          text: 'js面试题',
          link: '/campus/JSInterview.md',
        },
        {
          text: 'Vue面试题',
          link: '/campus/VueInterview.md',
        },
        {
          text: 'React面试题',
          link: '/campus/ReactInterview.md',
        },
      ],
    },
    {
      text: '深入分析',
      collapsible: true,
      children: [
        '/campus/questions.md',
        // eslint占位符
      ],
    },
  ],
  '/standard/': [
    {
      text: '开发规范',
      collapsible: true,
      children: [
        '/standard/demo.md',
        // eslint占位符
      ],
    },
  ],
}
