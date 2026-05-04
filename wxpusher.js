/**
 * WxPusher 消息推送插件
 * 
 * 当 OpenCode 会话发生变化时（如空闲、报错、结束），自动推送微信通知
 * 
 * 使用方法：
 * 1. 复制 wxpusher.js 到你的 opencode 插件目录
 * 2. 修改配置：APP_TOKEN 和 TOPIC_IDS
 * 3. 在 opencode.json 中配置 "plugin": ["./wxpusher.js"]
 */

const APP_TOKEN = "YOUR_APP_TOKEN";  // 替换为你的 WxPusher APP_TOKEN
const TOPIC_IDS = [YOUR_TOPIC_ID];    // 替换为你的专题 ID

const send = async (summary, content) => {
  const payload = JSON.stringify({
    appToken: APP_TOKEN,
    content,
    summary,
    contentType: 1,
    topicIds: TOPIC_IDS,
  });
  await fetch('https://wxpusher.zjiecode.com/api/send/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
  });
};

export default async (ctx) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await send("🔔 OpenCode 在等你", "OpenCode 在等你回来操作，请切回终端查看。");
      } else if (event.type === "session.error") {
        await send("🚨 OpenCode 报错崩溃", "老板，OpenCode 遇到致命报错或网络中断了！请切回终端查看。");
      } else if (event.type === "session.deleted") {
        await send("✅ OpenCode 任务完成", "OpenCode 任务已结束。");
      }
    },
  };
};