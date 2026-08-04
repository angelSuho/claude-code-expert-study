#!/bin/bash
set -euo pipefail

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

[[ -z "$FILE_PATH" ]] && exit 0

# 파이썬 파일만 처리
if echo "$FILE_PATH" | grep -qE '\.py$'; then
  # Black + isort 실행
  black "$FILE_PATH" 2>/dev/null || true
  isort "$FILE_PATH" 2>/dev/null || true
fi

exit 0
