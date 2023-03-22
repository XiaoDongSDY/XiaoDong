# vuepress-next

[![github check](https://github.com/vuepress/vuepress-next/workflows/check/badge.svg)](https://github.com/vuepress/vuepress-next/actions?query=workflow%3Acheck)
[![github docs](https://github.com/vuepress/vuepress-next/workflows/docs/badge.svg)](https://github.com/vuepress/vuepress-next/actions?query=workflow%3Adocs)
[![npm](https://badgen.net/npm/v/vuepress/next)](https://www.npmjs.com/package/vuepress)
[![coverage](https://coveralls.io/repos/github/vuepress/vuepress-next/badge.svg?branch=main)](https://coveralls.io/github/vuepress/vuepress-next?branch=main)
[![license](https://badgen.net/github/license/vuepress/vuepress-next)](https://github.com/vuepress/vuepress-next/blob/main/LICENSE)
[![discord](https://badgen.net/discord/online-members/ptFjefy6H5?icon=discord&label=discord)](https://discord.gg/ptFjefy6H5)

## Status: Beta

For users from VuePress v1, please check out the [migration guide](https://v2.vuepress.vuejs.org/about/migration.html).

For users who want to follow our progress or contribute to this project, please check out the [roadmap](https://github.com/vuepress/vuepress-next/discussions/68).

## Documentation

https://v2.vuepress.vuejs.org

## Contribution

See [Contributing About](https://github.com/vuepress/vuepress-next/blob/main/docs/contributing.md).

## License

[MIT](https://github.com/vuepress/vuepress-next/blob/main/LICENSE)
# CRDong小东博客

## 开发要求：

## Node.js version 14.18.0+
## pnpm version 7+
## 克隆代码仓库，并安装依赖：

## pnpm install
## 构建源代码：

## pnpm build
## 开始开发项目文档网站：

## pnpm docs:dev
本项目开发使用的一些主要工具：

TypeScript 作为开发语言
Vitest 用于单元测试
ESLint + Prettier 用于代码检查和格式化
pnpm build
build 命令会使用 tsc 和 tsup 将 TypeScript 源文件编译为 JavaScript 文件。

此外，它还会将必要的资源文件从源文件目录复制到输出目录。这是因为一些资源文件不会被 tsc 或 tsup 处理，但它们仍需要被放置到输出目录，并保持它们的项目对路径不变。

你在克隆代码仓库后，可能需要先执行该命令来确保项目代码可以顺利运行，因为编译后的输出目录被 .gitignore 排除在仓库以外了。

pnpm clean
clean 命令会执行所有子 Package 中的 clean 命令，清除所有的输出文件目录和缓存文件。换言之，它将移除所有通过 build 和 copy 命令生成的文件。

当你想要从最初状态重新构建源代码时，你可以执行该命令。

pnpm docs:*
pnpm docs:build, pnpm docs:dev, pnpm docs:clean
docs: 前缀表明，这些命令是针对文档 (documentation) 进行操作的，即 docs 目录。

VuePress 使用它自己来构建自己的文档网站。

你需要先执行 pnpm build 来构建 VuePress 源代码，然后再运行这些 docs: 开头的命令来开发或构建文档。

pnpm docs:serve
在本地启动文档网站服务器。

你需要先运行 pnpm docs:build 来生成文档网站的输出文件，然后再通过该命令来启动文档网站。

pnpm lint
lint 命令使用 ESLint 来检查所有源文件。

pnpm test
test 命令使用 Vitest 来运行单元测试
