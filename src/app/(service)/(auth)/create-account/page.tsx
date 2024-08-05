import FormInput from "@/app/(service)/(_components)/(auth)/form/form-input";
import FormBtn from "@/app/(service)/(_components)/(auth)/form/form-btn";
import SocialLogin from "@/app/(service)/(_components)/(auth)/social-login";
export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder={"Username"}
          required={true}
          errors={[]}
        />
        <FormInput
          name="email"
          type="email"
          placeholder={"Email"}
          required={true}
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder={"Confirm Password"}
          required={true}
          errors={[]}
        />
        <FormBtn loading={false} text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
