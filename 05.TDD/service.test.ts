import { test } from "node:test";
import assert from "node:assert/strict";
import { EmailValidator } from "./service";

test("'@'가 없는 문자열은 유효하지 않다", () => {
  const validator = new EmailValidator();

  assert.equal(validator.isValid("user example.com"), false);
});

test("'@'가 여러 개인 문자열은 유효하지 않다", () => {
  const validator = new EmailValidator();

  assert.equal(validator.isValid("user@example@com"), false);
});
