module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'docs', // 文档更新
        'fix', // bug 修复
        'feat', // 新增功能
        'perf', // 性能优化
        'init', // 初始化项目
        'style', // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
        'test', // 新增测试用例或是更新现有测试
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'chore', // 不属于以上类型的其他类型(日常事务)
        'merge', // 合并分⽀，例如： merge（前端页⾯）： feature-xxxx修改线程地址
        'config', // 修改项目配置文件
        'revert', // 回滚某个更早之前的提交
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
      ],
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
