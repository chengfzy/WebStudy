# Web Study Code

## HtmlStudy

Some study code about HTML

## Node Study

1.  Node01_Basic
    Node 基本使用, 代码参考[Vue3 入门指南与实战案例-工程化的前期准备](https://vue3.chengpeiquan.com/guide.html)

    - `./src/cjs`: 使用 CommonJS 规范开发, [Ref](https://vue3.chengpeiquan.com/guide.html#%E7%94%A8-commonjs-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%9D%97)
    - `./src/esm`: 使用 ES Module 规范开发, [Ref](https://vue3.chengpeiquan.com/guide.html#%E7%94%A8-es-module-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%9D%97)
    - `./src/ts`: 一些 TypeScript 的使用, [Ref](https://vue3.chengpeiquan.com/typescript.html)
      如果出现如下错误, 可以将`tsconfig.json`删掉或重命名, 再运行

      ```sh{.line-numbers}
      import greet from './greet';
      ^^^^^^

          SyntaxError: Cannot use import statement outside a module
      ```

    - `./server`: 搭建服务器, [在浏览器中访问 ESM](https://vue3.chengpeiquan.com/guide.html#%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E9%87%8C%E8%AE%BF%E9%97%AE-esm)

    运行时如果出现包找不到的情况, 需要使用命令`npm update`来更新包

## Vue Study

1. vue01_basic
   vue 简单使用, 参考https://cn.vuejs.org/guide/introduction.html. 对`npm init vue@latest`中生成的代码进行了删减, 方便进行最简单语法的学习
