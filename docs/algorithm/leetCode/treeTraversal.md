# 层序遍历二叉树

小东：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）

TreeNode

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
```

## 借助队列迭代

```js
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let queue = [root]
    while (queue.length > 0) {
        // 当前层的节点个数
        let nowSize = queue.length
        let nowLevelRes = []
        while (nowSize > 0) {
            // 取出第一个元素
            let p = queue.shift()
            nowLevelRes.push(p.val)
            if (p.left) {
                queue.push(p.left)
            }
            if (p.right) {
                queue.push(p.right)
            }
            nowSize--
        }
        // 放入当前层的结果
        res.push(nowLevelRes)
    }
    return res
};
```

## DFS递归	

```js
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let res = []
    const dfs = (deep, node, res) => {
        // 如果结果的深度小于当前深度,放入空数组
        if (res.length < deep) {
            res.push([])
        }
        res[deep - 1].push(node.val)
        if (node.left) dfs(deep + 1, node.left, res)
        if (node.right) dfs(deep + 1, node.right, res)
    }
    dfs(1, root, res)
    return res
};
```

