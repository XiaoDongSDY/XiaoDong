import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

// 表情：👻🥝🍉🍭⛄🚩💭🌟🚀🍔🍊🍩🥑✍🦋
export const navbarZh: NavbarConfig = [
  {
    text: '关于小东✍',
    link: '/about/',
  },
  {
    text: 'JavaScript',
    children: [
      {
        text: '入门篇',
        children: [
          // '/javascript/basic/introduction',
          // '/javascript/basic/history',
          '/javascript/basic/grammar',
        ],
      },
      {
        text: '数据类型',
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
        children: [
          '/javascript/features/conversion',
          '/javascript/features/error',
          '/javascript/features/style',
          '/javascript/features/console',
        ],
      },
      {
        text: '标准库',
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
        children: [
          '/javascript/async/general',
          '/javascript/async/timer',
          '/javascript/async/promise',
        ],
      },
      {
        text: 'DOM',
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
  },
  {
    text: 'TypeScript',
    children: [
      {
        text: '基础篇',
        children: [
          {
            text: '常用类型',
            link: '/TScript/basics/TypeScript.md',
          },
        ],
      },
      {
        text: '待更新',
        children: [
          // eslint占位符
        ],
      },
    ],
  },
  {
    text: 'Web',
    children: [
      {
        text: 'Vue',
        children: ['/web/vue2/basics.md', '/web/vue3/basics.md'],
      },
      {
        text: 'React',
        children: [
          '/web/react/basics.md',
          {
            text: 'React官网',
            link: 'https://react.docschina.org/',
          },
        ],
      },
      {
        text: '构建工具',
        children: [
          '/web/vite/demo.md', // webpack
          '/web/webpack/demo.md', // Vite
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
  },
  {
    text: 'Java',
    children: [
      {
        text: '待更新',
        children: [
          // eslint占位符
        ],
      },
    ],
  },
  {
    text: `算法💭`,
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
  {
    text: '备战春秋',
    children: [
      {
        text: '校招',
        children: [
          {
            text: '校招',
            link: '/campus/demo.md',
          },
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
        children: [
          {
            text: '面试题',
            link: '/campus/questions.md',
          },
        ],
      },
    ],
  },
  {
    text: '开发规范',
    children: [
      {
        text: '代码规范',
        children: [
          '/standard/demo.md',
          // eslint占位符
        ],
      },
    ],
  },
]
