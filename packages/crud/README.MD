<h1 align="center">🎉🚀midway-crud🎉👋</h1>
<p align="center">
<img src="https://img.shields.io/badge/node-%3E%3D16.0.0-blue.svg" />  
<img src="https://img.shields.io/badge/midway-%3E%3D3.0.0-success.svg" />  
<img src="https://img.shields.io/badge/适用-标准项目-success.svg?style=social&logo=github" /> 
</p>

## 🏠 [项目主页](https://github.com/aipeli/midway-components)

> - 可以根据目录结构自动生成路由（包括：add delete upate info list page）

> - 可以根据不同 controller 设置中间件

> - 可以多条件复杂查询

## 📦 环境要求

- midway &gt;=3.x

## 🛠️ 安装

```sh
pnpm install @aipeli/midway-crud
```

## ✍️ 用法

一、创建 MidwayJS 项目

```bash
npm init midway
```

- 选择 `koa-v3`

二、修改目录结构如下：

```
└─src
    │  configuration.ts
    │  interface.ts
    ├─config
    │      config.default.ts
    │      config.unittest.ts
    ├─filter
    │      default.filter.ts
    │      notfound.filter.ts
    ├─middleware
    │      global.ts
    └─modules
        └─shop
            ├─controller
            │  ├─admin
            │  │      home.ts
            │  └─api
            │          login.ts
            ├─entity
            │      user.ts
            ├─middleware
            │      log.ts
            └─service
                    user.ts
```

三、package.json 依赖包

```json
{
  "dependencies": {
    "@aipeli/midway-crud": "^1.0.0",
    "@midwayjs/bootstrap": "^3.0.0",
    "@midwayjs/core": "^3.0.0",
    "@midwayjs/decorator": "^3.0.0",
    "@midwayjs/info": "^3.0.3",
    "@midwayjs/koa": "^3.0.0",
    "@midwayjs/logger": "^2.14.2",
    "@midwayjs/orm": "^3.0.2",
    "@midwayjs/validate": "^3.0.3",
    "mysql2": "^2.3.3"
  },
  "devDependencies": {
    "@midwayjs/cli": "^1.2.97",
    "@midwayjs/mock": "^3.0.0",
    "@types/jest": "^27.4.0",
    "@types/koa": "^2.13.4",
    "@types/node": "17",
    "cross-env": "^7.0.3",
    "jest": "^27.5.0",
    "mwts": "^1.3.0",
    "ts-jest": "^27.1.3",
    "typescript": "^4.5.5"
  }
}
```

> `@midwayjs/bootstrap`、`@midwayjs/core`、`@midwayjs/decorator`、`@midwayjs/koa`、`@midwayjs/orm`、`@midwayjs/validate`

以上包必须保持 3.x 以上

四、配置 CRUD 包

1、configuration.ts

```
import * as crud from '@aipeli/midway-crud';
```

```
@Configuration({
  imports: [
    koa,
    orm,
    validate,
    crud,
  ],
  importConfigs: [join(__dirname, './config')],
})
```

2、在`src/config/config.default.ts`中配置 orm

```
  orm: {
    /**
     * 单数据库实例
     */
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'midway_crud',
    synchronize: true, // 是否同步表
    logging: false,
  },
```

五、使用 CRUD 包

1、entity

```typescript
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@aipeli/midway-crud';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('shop_user')
export class ShopUserEntity extends BaseEntity {
  @Column({ comment: '姓名' })
  name: string;
}
```

2、service

```typescript
import { Repository } from 'typeorm';
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { BaseService } from '@aipeli/midway-crud';
import { ShopUserEntity } from '../entity/user';

@Provide()
export class ShopUserService extends BaseService {
  @InjectEntityModel(ShopUserEntity)
  userModel: Repository<ShopUserEntity>;

  async getUser(id: number) {
    const user = await this.userModel.findOne(id);
    return user;
  }
}
```

3、controller

```typescript
import { Crud, BaseController } from '@aipeli/midway-crud';
import { Get, Inject, Query } from '@midwayjs/decorator';
import { ShopUserEntity } from '../../entity/user';
import { ShopUserService } from '../../service/user';

/**
 * url: http://127.0.0.1:7001/admin/shop/user/add (delete, update, info, list, page)
 * get: info
 * post: add, delete, update, list, page
 */
@Crud({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ShopUserEntity,
  service: ShopUserService,
})
export class ShopAdminUserController extends BaseController {
  @Inject()
  userService: ShopUserService;

  // 自定义
  // http://127.0.0.1:7001/admin/shop/user/get_user?id=1
  @Get('/get_user')
  async get_user(@Query('id') id) {
    const user = await this.userService.getUser(id);
    return this.success(user);
  }
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
