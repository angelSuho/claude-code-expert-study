#!/bin/bash
set -euo pipefail

# stdin에서 Hook 입력 읽기
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# 파일 경로가 없으면 종료
[[ -z "$FILE_PATH" ]] && exit 0

# TypeScript/JavaScript 파일만 처리
if echo "$FILE_PATH" | grep -qE '\.(ts|tsx|js|jsx)$'; then
  # Prettier 실행 (실패해도 계속 진행)
  npx prettier --write "$FILE_PATH" 2>/dev/null || true
fi

exit 0
