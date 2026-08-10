/**
 * EmailValidator — TDD 연습용 스켈레톤
 *
 * CLAUDE.md의 Red-Green-Refactor 규칙에 맞춰, 아래 요구사항을 하나씩 골라
 * 실패하는 테스트부터 작성하고 최소 구현으로 통과시키는 연습을 하세요.
 * 지금은 모든 메서드가 미구현 상태(Not implemented)입니다.
 *
 * 요구사항 (한 번에 하나씩 진행)
 * 1. 유효한 이메일 주소("user@example.com")를 검증하면 true를 반환한다.
 * 2. '@'가 없는 문자열은 유효하지 않다.
 * 3. '@'가 여러 개인 문자열은 유효하지 않다.
 * 4. 도메인 부분에 '.'이 없으면 유효하지 않다 (예: "user@example").
 * 5. 로컬 파트(@ 앞부분)가 비어있으면 유효하지 않다 (예: "@example.com").
 * 6. 도메인 파트(@ 뒷부분)가 비어있으면 유효하지 않다 (예: "user@").
 * 7. 이메일 앞뒤 공백은 무시하고 검증한다 (trim 처리, 예: " user@example.com ").
 * 8. 빈 문자열이나 공백만 있는 문자열은 유효하지 않다.
 * 9. 대문자가 섞인 이메일도 유효하게 처리한다 (예: "User@Example.COM").
 */

export class EmailValidator {
  isValid(email: string): boolean {
    return this.hasExactlyOneAtSymbol(email);
  }

  private hasExactlyOneAtSymbol(email: string): boolean {
    const atCount = email.split("@").length - 1;
    return atCount === 1;
  }
}
