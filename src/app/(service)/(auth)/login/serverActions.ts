"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEXP,
  PASSWORD_REGEXP_ERR,
  NumberText,
} from "@/shared/lib/Regex";
import { redirect } from "next/navigation";
import validator from "validator";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, "10자 이상 작성하셔야합니다.")
    .regex(PASSWORD_REGEXP, PASSWORD_REGEXP_ERR),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error);
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}

const phoneSchema = z
  .string()
  .trim()
  .regex(NumberText, "숫자와 '-'만 입력가능합니다.")
  .refine((phone) => validator.isMobilePhone(phone), "잘못된 번호 형식입니다.");
const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

export async function smsLogin(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
