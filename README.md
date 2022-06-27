<p align="center">
  <a href="https://midwayjs.org/" target="blank"><img src="https://img.alicdn.com/imgextra/i1/O1CN01xQLU011T2R7PHksIv_!!6000000002324-2-tps-1200-616.png" width="800" alt="Midway Logo" /></a>
<h1 align="center">🎉🚀Midway Components🎉👋</h1>
<p align="center">
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg " /></a> 
<img src="https://img.shields.io/badge/node-%3E%3D16.0.0-blue.svg" />  
<img src="https://img.shields.io/badge/midway-%3E%3D3.0.0-success.svg" />  
<img src="https://img.shields.io/badge/适用-标准项目-success.svg?style=social&logo=github" />
</p>

## 🏠 [访问 NPM 仓库](https://www.npmjs.com/~aipeli)

> Midway 组件集合，适用于 midway3.x，标准项目

## ✨ 组件列表

| 组件名称                                                                     | 开发状态 |                                     版本号                                     | 描述                                                  |
| :--------------------------------------------------------------------------- | -------: | :----------------------------------------------------------------------------: | :---------------------------------------------------- |
| [@aipeli/midway-kodo](https://www.npmjs.com/package/@aipeli/midway-kodo)     |   已发布 |  ![avatar](https://img.shields.io/npm/v/@aipeli/midway-kodo.svg?color=orange)  | 上传、访问七牛上的资源                                |
| [@aipeli/midway-casbin](https://www.npmjs.com/package/@aipeli/midway-casbin) |   已发布 | ![avatar](https://img.shields.io/npm/v/@aipeli/midway-casbin.svg?color=orange) | 通过 casbin 来实现管理权限                            |
| [@aipeli/midway-log2db](https://www.npmjs.com/package/@aipeli/midway-log2db) |   已发布 | ![avatar](https://img.shields.io/npm/v/@aipeli/midway-log2db.svg?color=orange) | 将用户的访问日志保存到数据库                          |

## 🛠️ 项目中安装组件包

```sh
npm install @aipeli/midway-kodo
npm install @aipeli/midway-casbin
npm install @aipeli/midway-log2db
```

## 📦 代码提交规则

### 提交格式：

`前缀` `:` `<空格>` `提交的代码描述`

### 范例：

```text
chore: 初始化项目
```

### 前缀符列表

| 前缀     | 描述                                                                              |
| -------- | --------------------------------------------------------------------------------- |
| ci       | 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI， Circle 等)的提交 |
| docs     | 文档更新                                                                          |
| fix      | bug 修复                                                                          |
| feat     | 新增功能                                                                          |
| perf     | 性能优化                                                                          |
| init     | 初始化项目                                                                        |
| style    | 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)                          |
| test     | 新增测试用例或是更新现有测试                                                      |
| build    | 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交             |
| chore    | 不属于以上类型的其他类型(日常事务)                                                |
| merge    | 合并分⽀，例如： merge（前端页⾯）： feature-xxxx 修改线程地址                    |
| config   | 修改项目配置文件                                                                  |
| revert   | 回滚某个更早之前的提交                                                            |
| refactor | 重构代码(既没有新增功能，也没有修复 bug)                                          |

## ✍️ 组件包项目用法

```sh
# 安装开发依赖
lerna bootstrap

# 编译所有组件包
lerna run build

# 将组件包链接到node_modules（bootstrap时会link）
lerna link

# 清除组件包中的安装依赖
lerna clean

# 清除组件dist目录
lerna run cls

# 更新组件依赖（分别在每个组件中运行）
ncu -u

# 发布组件包到npmjs.org

# 该命令等同于: lerna version + lerna publish from-git
lerna publish

# 创建发布版本号
lerna version

# 根据 git commit 上的 annotaed tag 进行发包
lerna publish from-git

# 根据 lerna 下的 package 里面的 package.json 的 version 变动来发包
lerna publish from-package
```

## 🧪 运行 demo

```sh
cd packages/demo
npm run dev
```

## 🧑 [贡献【期待你的加入，共同学习】](https://github.com/aipeli/midway-components/graphs/contributors)

<figure>
<a href="https://github.com/aipeli"><img src="https://avatars.githubusercontent.com/u/43819745?s=80&v=4"/></a>
</figure>

## 🤝 ISSUES

欢迎投稿、提问和功能请求！ [issues 地址](https://github.com/aipeli/midway-components/issues).

## ⭐️ 支持

如果项目对你有帮助，请给一个 start ⭐️ 吧!

- 💼 GitHub: [@midway-components](https://github.com/aipeli/midway-components)

## 📝 License

Copyright © 2022 [aipeli](https://github.com/aipeli). This project is [MIT](LICENSE) licensed.

---

_This README was generated with ❤️ by [fast-readme](https://www.npmjs.com/package/@fastjsui/fast-readme)_
