export const PASSWORD_MIN_LENGTH = 10;

export const PASSWORD_REGEXP = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%&^*]).+$/
);
export const PASSWORD_REGEXP_ERR =
  "비밀번호는 소문자, 대문자, 숫자, 특수문자(#?!@$%&^*)를 포함해야합니다.";

export const NumberText = new RegExp(/^(?=.*[0-9])(?=.*?[-]).+$/);
