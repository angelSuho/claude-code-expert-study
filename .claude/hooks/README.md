# Claude Code Hooks

이 폴더에는 Claude Code의 특정 이벤트 발생 시 자동으로 실행되는 Hook 스크립트를 관리합니다.

## 파일 구성

.claude/hooks/
├── format-ts.sh   # TypeScript/JavaScript 파일을 Prettier로 포맷
├── format-py.sh   # Python 파일을 Black과 isort로 포맷
└── README.md

## Hook 실행 흐름

Claude가 도구 실행
    ↓
설정의 matcher와 도구명이 일치하는지 확인
    ↓
Hook 스크립트 실행
    ↓
Claude Code가 실행 정보를 JSON으로 stdin에 전달
    ↓
스크립트가 필요한 값을 추출하여 후속 작업 수행
```
예를 들어 Claude가 Edit 도구로 파일을 수정하면 다음과 비슷한 JSON이 Hook에 전달
{
  "hook_event_name": "PostToolUse",
  "tool_name": "Edit",
  "tool_input": {
    "file_path": "/project/src/App.tsx",
    "old_string": "기존 내용",
    "new_string": "변경 내용"
  }
}

Edit과 Write 도구의 입력에는 tool_input.file_path가 포함되므로, 수정된 파일의 경로 파싱
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')
• .tool_input.file_path: Claude Code가 전달하는 JSON 필드
• FILE_PATH: 스크립트에서 임의로 정한 셸 변수명
• // empty: 값이 없거나 null이면 빈 문자열 반환
```

*set -euo pipefail*
- 스크립트에서 예상하지 못한 오류를 빠르게 발견하기 위한 설정
  - e: 명령이 실패하면 스크립트를 중단
  - u: 선언되지 않은 변수를 사용하면 오류
  - o pipefail: 파이프라인 중간 명령이 실패해도 전체 실패로 처리

*FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')*
- JSON에서 수정된 파일 경로 추출
  - .tool_input.file_path: Claude Code가 전달하는 JSON 필드
  - FILE_PATH: 스크립트에서 정한 변수명
  - // empty: 값이 없으면 빈 문자열 반환
  - jq -r: JSON 문자열을 일반 문자열로 출력

*[[ -z "$FILE_PATH" ]] && exit 0*
- 파일 경로가 없으면 정상 종료

*grep -qE '\.(ts|tsx|js|jsx)$'*
- 파일명이 지정한 확장자로 끝나는지 검사
  - q: 결과를 출력하지 않고 성공 여부만 확인
  - E: 확장 정규표현식 사용
  - $: 문자열의 끝

*2>/dev/null || true*
  - 2>/dev/null: 오류 메시지를 숨김
  - || true: 명령이 실패해도 Hook 전체는 성공 처리
