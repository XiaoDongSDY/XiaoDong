---
home: true
title: Home
# 主封面图
heroImage: https://xiaodongsdy.cn/personalBlog/HomeImg.png
# heroImage: https://xiaodongsdy.cn/personalBlog/meituanWaimai.gif
actions:
  - text: 立即进入⭐
  # - text: Get Started
    link: /javaScript/basic/grammar
    type: primary
  - text: 有关小东
  # - text: Introduction
    link: /about/
    type: secondary
features:
  # - title: 出发点
  #   details: 热衷于追求完美的设计师，善于记录的摄影爱好者，漫无目的打量着生活的乐趣.
  # - title: 里程碑
  #   details: 前端小白出身，心有大志
  # - title: 目的地
  #   details: 小角色大梦想.
footer: MIT Licensed | Copyright © 2022-present
---

### 复杂的技术，简单的讲解。

<!-- # My JavaScript language

console.log('Hello JavaScript')

# create a variable

let name = 'XiaoDongSDY'

# create a final

const introduction = 'I am a front-end development engineer' -->
<CodeGroup>
  <CodeGroupItem title="JavaScript" active>

```bash
const awaitWrap = (promise) => {
  return promise
   .then(data => [null, data])
   .catch(err => [err, null])
 }
const [err, data] = await awaitWrap(fetchData())
```

  </CodeGroupItem>

  <CodeGroupItem title="TyprScript">
  
```bash
function awaitWrap<T, U = any>(promise: Promise<T>):Promise<[U | null, T || null]>{
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, null])
}
```

  </CodeGroupItem>
</CodeGroup>
