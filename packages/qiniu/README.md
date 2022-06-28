<h1 align="center">🎉🚀midway-qiniu</h1>
<p>
  <a href="https://www.npmjs.com/package/@aipeli/midway-qiniu" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@aipeli/midway-qiniu.svg?color=succed">
  </a>
 <a href="https://opensource.org/licenses/ISC" target="_blank"> <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg " /> </a>
  <img src="https://img.shields.io/badge/midway-%3E%3D3.0.0-blue.svg" />  
</p>

## 七牛 🐮 免费存储空间速速注册

  <a href="https://s.qiniu.com/yUVJ3q" target="_blank">
    <img alt="" src="https://dn-lego-static.qbox.me/cps/1638268217-480x300.jpg">
  </a>

## 🏠 [项目主页](https://github.com/aipeli/midway#readme)

> 使用本组件可快速基于`midway`接入七牛海量存储系统（qiniu）

> qiniu object storage service qiniu on MidwayJS(koa) v3.x

### 已实现接口

- `form_up模式上传`
  - putFile(targetFile: string, localFile: string, isResume: boolean = false)
  - putStream(targetFile: string, rsStream: ReadableStream, isResume: boolean = false)
- `resume_up模式上传`
  - putFile(targetFile: string, localFile: string, isResume: boolean = false)
  - putStream(targetFile: string, rsStream: ReadableStream, isResume: boolean = false)
- publicDownloadUrl(targetFile: string)
- privateDownloadUrl(targetFile: string, deadline: number = 60)
- fetch(resUrl: string, targetFile: string)
- stat(targetFile: string)

## 📦 环境要求

- midway &gt;=3.x

## 🛠️ 安装

```sh
pnpm install @aipeli/midway-qiniu
```

## ✍️ 用法

```typescript
import { Crud, BaseController } from '@aipeli/midway-crud';
import { Config, Get, Inject } from '@midwayjs/decorator';
import * as qiniu from 'qiniu';
import { qiniuService } from './qiniu_manager';

@Crud('/qiniu')
export class qiniuUploadController extends BaseController {
  @Inject()
  qiniu: qiniuService;
  @Inject()
  baseDir: string;
  @Config('qiniu')
  qiniuConfig: Record<string, string>;
  // http://127.0.0.1:7001/admin/shop/qiniu/upload
  @Get('/upload')
  async upload() {
    console.log(this.baseDir, __dirname);

    //上传到七牛后保存的文件名
    // const key = 'upload/1.rar'
    const key = 'upload/midway-qiniu-test.png';
    //要上传文件的本地路径
    // const filePath = __dirname + '/1.rar'
    const filePath = __dirname + '/midway-qiniu-test.png';
    const putExtra = new qiniu.resume_up.PutExtra();
    // 如果指定了断点记录文件，那么下次会从指定的该文件尝试读取上次上传的进度，以实现断点续传
    // putExtra.resumeRecordFile = 'progress.log';
    //分片上传可指定 version 字段，v2 表示分片上传 v2 , 可自定义分片大小，此处设为 6MB
    putExtra.version = 'v2';
    putExtra.partSize = 6 * 1024 * 1024;
    putExtra.progressCallback = function (uploadBytes, totalBytes) {
      console.log('progress:' + uploadBytes + '(' + totalBytes + ')');
    };
    try {
      const uploadResult = await this.qiniu
        .ResumeUpPutExtra(putExtra)
        .putFile(key, filePath, true);
      return { success: true, message: 'OK', data: uploadResult };
    } catch (error) {
      return { success: true, message: 'OK', data: error.error };
    }
  }
}
```

## 🧪 配置

> 配置 `config/config.default.ts`

```typescript
import { MidwayConfig } from '@midwayjs/core';

export default {
  qiniu: {
    accessKey: '',
    secretkey: '',
    bucket: '',
    bucketDomain: '',
    metadata: '',
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
import * as qiniu from '@aipeli/midway-qiniu';
@Configuration({
  imports: [
    koa,
    validate,
    qiniu,
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

## 🧑 开发人员

- 🧑 aipeli
  - 🌏 Website: http://www.fast-js.com
  - 💼 GitHub: [@aipeli/midway](https://github.com/aipeli/midway)

## 🤝 贡献

欢迎投稿、问题和功能请求！ [issues 地址](https://github.com/aipeli/midway/issues).

## ⭐️ 支持

如果项目对你有帮助，请给我一个 start⭐️ 吧!

- 💼 GitHub: [@aipeli/midway](https://github.com/aipeli/midway)

## 📝 License

Copyright © 2022 [aipeli](https://github.com/aipeli). This project is [MIT](LICENSE) licensed.

---

_This README was generated with ❤️ by [fast-readme](https://www.npmjs.com/package/@fastjsui/fast-readme)_
