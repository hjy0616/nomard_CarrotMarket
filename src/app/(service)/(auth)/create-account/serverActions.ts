"use server";
import * as z from "zod";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEXP,
  PASSWORD_REGEXP_ERR,
} from "@/shared/lib/Regex";

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const Schema = z
  .object({
    username: z.string().trim(),
    email: z
      .string()
      .email("유효한 이메일을 입력해주세요.")
      .min(1, "필수입력입니다.")
      .toLowerCase(),
    password: z
      .string({ required_error: "비밀번호를 입력하세요." })
      .min(PASSWORD_MIN_LENGTH, "최소 10자 이상 작성해야합니다.")
      .regex(PASSWORD_REGEXP, PASSWORD_REGEXP_ERR),
    confirm_password: z.string().min(10, "최소 10자 이상 작성하셔야합니다."),
  })
  .refine(checkPasswords, {
    message: "패스워드가 동일하지 않습니다.",
    path: ["confirm_password"],
  });

export async function CreateAccountHandleForm(
  prevState: any,
  formData: FormData
) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = Schema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
