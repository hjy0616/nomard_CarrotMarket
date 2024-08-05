import FormInput from "@/app/(service)/(_components)/(auth)/form/form-input";
import FormBtn from "@/app/(service)/(_components)/(auth)/form/form-btn";
import SocialLogin from "@/app/(service)/(_components)/(auth)/social-login";

export default function Login() {
  async function handleForm(formData: FormData) {
    "use server";
    console.log(formData.get("email"), formData.get("password"));
    console.log("i run in the server");
  }

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
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
