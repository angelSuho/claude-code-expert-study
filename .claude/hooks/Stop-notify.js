const notifier = require("node-notifier");

notifier.notify({
  title: "Claude Code",
  message: "작업이 완료되었습니다.",
  sound: true,
});

// 윈도우 전용: 작업이 완료되면 알림을 보내는 코드입니다.
