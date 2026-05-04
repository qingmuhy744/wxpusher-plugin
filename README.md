# WxPusher 插件

通过 WxPusher 在微信接收 OpenCode 会话状态通知。

## 功能

- `session.idle` - 会话空闲等待用户输入时通知
- `session.error` - 会话报错或网络中断时通知
- `session.deleted` - 会话结束时通知

## 安装

1. **复制插件文件**
   
   将 `wxpusher.js` 复制到你的 opencode 插件目录，例如：
   ```
   ~/.config/opencode/plugins/wxpusher.js
   ```

2. **配置**

   编辑 `wxpusher.js`，替换以下配置：
   ```javascript
   const APP_TOKEN = "YOUR_APP_TOKEN";   // 你的 WxPusher APP_TOKEN
   const TOPIC_IDS = [YOUR_TOPIC_ID];     // 你的专题 ID
   ```

   获取方式：
   - APP_TOKEN：在 <a href="https://wxpusher.zjiecode.com/admin/main" target="_blank">WxPusher 控制台</a> 创建应用获取
   - TOPIC_ID：创建专题后获取专题 ID

3. **配置 OpenCode**

   在 `opencode.json` 中添加插件路径：
   ```json
   {
     "plugin": ["./plugins/wxpusher.js"]
   }
   ```

4. **重启 OpenCode**

## 卸载

从 `opencode.json` 中移除插��配置，删除插件文件即可。