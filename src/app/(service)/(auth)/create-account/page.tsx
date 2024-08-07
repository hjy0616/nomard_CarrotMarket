"use client";
import Input from "@/app/(service)/(_components)/(auth)/form/Input";
import FormBtn from "@/app/(service)/(_components)/(auth)/form/Button";
import SocialLogin from "@/app/(service)/(_components)/(auth)/social-login";
import { CreateAccountHandleForm } from "./serverActions";
import { useFormState } from "react-dom";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(CreateAccountHandleForm, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder={"Username"}
          required={true}
          errors={state?.fieldErrors.username}
        />
        <Input
          name="email"
          type="email"
          placeholder={"Email"}
          required={true}
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder={"Password"}
          required={true}
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder={"Confirm Password"}
          required={true}
          errors={state?.fieldErrors.confirm_password}
        />
        <FormBtn loading={false} text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
