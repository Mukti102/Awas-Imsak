"use client";
import React, { ChangeEvent, useState } from "react";
import { Label } from "@/components/ui/lable";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/config/_firebase/config";
import { useRouter } from "next/navigation";

export function SignInFormDemo() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [isFailed, setIsFailed] = useState(false);
  const [isSucces, setIsSucces] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSucces(false);
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(emailValue, passwordValue);
      const user = {
        email: res?.user?.email,
        emailVerified: res?.user?.emailVerified,
        token: res?.user?.refreshToken,
        uid: res?.user?.uid,
      };
      if (res !== undefined) {
        setIsSucces(true);
        router.push("/Self-Development");
      } else {
        setIsFailed(true);
        setIsSucces(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to My App
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Jika kamu belum punya akun harap sign up terlebih dahulu
      </p>
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmailValue(e.target.value)
            }
            value={emailValue}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            value={passwordValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPasswordValue(e.target.value)
            }
            type="password"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {isSucces ? "Sign in" : "Loading..."}
          <BottomGradient />
        </button>

        <h1 className="text-black text-sm text-center my-2">
          Belum punya akun{" "}
          <Link href={"/sign-up"} className="text-green-600 font-bold">
            Sing-up
          </Link>
        </h1>
        {isFailed && (
          <h1 className="text-red-500 text-xs font-semibold">
            Login Failed, there is something wrong
          </h1>
        )}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-500 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
