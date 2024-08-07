"use client";
import FormInput from "@/app/(service)/(_components)/(auth)/form/Input";
import FormBtn from "@/app/(service)/(_components)/(auth)/form/Button";
import SocialLogin from "@/app/(service)/(_components)/(auth)/social-login";
import { useFormState } from "react-dom";
import { login } from "./serverActions";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEXP } from "@/shared/lib/Regex";
export default function Login() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder={"Email"}
          required={true}
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder={"Confirm Password"}
          required={true}
          errors={[]}
        />
        <FormBtn loading={false} text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
