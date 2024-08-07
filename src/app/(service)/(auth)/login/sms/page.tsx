"use client";
import Input from "@/app/(service)/(_components)/(auth)/form/Input";
import Button from "@/app/(service)/(_components)/(auth)/form/Button";
import { useFormState } from "react-dom";
import { smsLogin } from "../serverActions";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="phone"
          type="text"
          placeholder={"Phone number"}
          min={100000}
          max={999999}
          required={true}
          errors={state.error?.formErrors}
        />
        {state.token ? (
          <Input
            name="token"
            type="number"
            placeholder={"Verification Code"}
            min={100000}
            max={999999}
            required={true}
          />
        ) : null}
        <Button
          loading={false}
          text={state.token == true ? "토큰 인증하기" : "인증 문자 보내기"}
        />
      </form>
    </div>
  );
}
