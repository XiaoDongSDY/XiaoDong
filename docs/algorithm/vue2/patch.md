# Patch算法



**Vue的Dif算法分为两个粒度，一个是组件级别(component Dif)，另一个是元素级别(Element Dif)。组件级别的Di算法比较简单，节点不相同就进行创建和替换，节点相同的话就会对其子节点进行更新，对子节点进行更新也就是元素级别的D近，通过插入、移动和删除等方式对旧列表改造成和新列表一致。**

![https://xiaodongsdy.cn/personalBlog/DiffGranularity.jpg](https://xiaodongsdy.cn/personalBlog/DiffGranularity.jpg)

**Vue的整个Dif过程就是整个patch方法的流程，整个流程也会通过递归地调用patchinode来完成对整VirtualDOM Tree的更新**

![](https://xiaodongsdy.cn/personalBlog/PatchProcess.jpg)

*后续待补充 ...*