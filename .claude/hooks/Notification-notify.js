const notifier = require("node-notifier");

notifier.notify({
  title: "Claude Code",
  message: "입력을 기다리고 있습니다.",
  sound: true,
});

// 윈도우 전용: 입력이 필요할 때 알림을 보내는 코드입니다.
