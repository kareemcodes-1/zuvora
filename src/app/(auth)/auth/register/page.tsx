"use client";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { registerUser } from "@/app/actions/registerUser";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="next-btn btn-base btn-dark !w-full !text-start"
    >
      {pending ? "Loading" : "Create an account"}
    </button>
  );
};

const Register = () => {
  const router = useRouter();

  const formAction = async (formData: FormData) => {
    const userInfo = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const data = await registerUser(userInfo);

      if (data) {
        const res = await signIn("credentials", {
          redirect: false,
          email: userInfo.email,
          password: userInfo.password,
        });

        if (res?.ok) {
          router.push("/");
        } else {
          console.log("Login after register failed", res);
        }
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-[1.3rem] font-semibold text-black bebas">
            Sign Up To Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction}>
            <div>
              {/* <Label htmlFor="name">Name</Label> */}
              <div className="mt-2">
                <Input type="text" name="name" id="name" className="h-[3.5rem] placeholder:text-black !lowercase" placeholder="Name"/>
              </div>
            </div>

            <div>
              {/* <Label htmlFor="email">Email address</Label> */}
              <div className="mt-2">
                <Input type="email" placeholder="Email Address" name="email" id="email" className="h-[3.5rem] placeholder:text-black !lowercase"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                {/* <Label htmlFor="password">Password</Label> */}
              </div>
              <div className="mt-2">
                <Input type="password" placeholder="Password" name="password" id="password" className="h-[3.5rem] placeholder:text-black !lowercase"/>
              </div>
            </div>

            <div>
              <SubmitBtn />
            </div>
          </form>

          <p className="mt-10 text-center text-[.825rem] text-muted-foreground telegraf uppercase font-[200]">
            Already have an account?{" "}
            <a href="/auth/login" className="font-semibold text-black underline">
              LOGIN
            </a>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <Image
          src="/test2.webp"
          alt="Right side illustration"
          className="h-[100vh] w-full object-cover"
          width={500}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Register;
