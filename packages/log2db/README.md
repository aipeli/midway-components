<h1 align="center">🎉🚀midway-log2db🎉👋</h1>
<p align="center">
<img src="https://img.shields.io/badge/node-%3E%3D16.0.0-blue.svg" />  
<img src="https://img.shields.io/badge/midway-%3E%3D3.0.0-success.svg" />  
<img src="https://img.shields.io/badge/适用-标准项目-success.svg?style=social&logo=github" /> 
</p>

## 🏠 [项目主页](https://github.com/aipeli/midway-components)

> 记录 API 访问日志并保存到数据中,自动识别来访问者 IP 地址位置、用户代理信息等

> Recode access api to db based on MidwayJS(koa) v3.x

## 📦 环境要求

- midway &gt;=3.x

## 🛠️ 安装

```sh
pnpm install @aipeli/midway-log2db
```

## ✍️ 用法

```typescript
import { Crud, BaseController } from '@aipeli/midway-crud';
import { Log2DbService } from '@aipeli/midway-log2db';
import { Get, Inject } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';

@Crud('/log2db')
export class ShopAdminLog2DbController extends BaseController {
  @Inject()
  ctx: Context;
  @Inject()
  log2db: Log2DbService;

  /**
   * 保存日志记录
   * http://127.0.0.1:7001/admin/shop/log2db/record
   * @param ctx 上下文
   * @param content 日志内容 (可选, 默认为url访问参数)
   * @returns 返回保存日志记录的ID
   */
  @Get('/record')
  async record() {
    const result_data = await this.log2db.record(this.ctx);
    return { success: true, message: 'OK', data: result_data };
  }

  /**
   * 清除日志
   * http://127.0.0.1:7001/admin/shop/log2db/clear
   */
  @Get('/clear')
  async clear() {
    // 清除全部日志
    await this.log2db.clear();
    await this.log2db.clear(0, true);
    // 清除3天前的日志
    await this.log2db.clear(3, false);
  }
}
```

## 🧪 配置

> 配置 `config/config.default.ts`

```typescript
import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1644208064112_2754',
  koa: {
    port: 7001,
  },
  orm: {
    /**
     * 单数据库实例
     */
    default: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'midway_crud',
      synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
      logging: false,
    },
  },
  logs2db: {
    ipdb: '/ipdb/ipipfree.ipdb',
  },
} as MidwayConfig;
```

> 配置 `/configuration.ts`

```typescript
import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import * as crud from '@aipeli/midway-crud';
import * as log2db from '@aipeli/midway-log2db';
@Configuration({
  imports: [
    koa,
    validate,
    crud,
    log2db,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {}
}
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
