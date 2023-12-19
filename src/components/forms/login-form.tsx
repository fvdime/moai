"use client";

import Link from "next/link";
import Input from "../input";
import Button from "../button";

type LoginProps = {
  loginHeader: string
  email: string
  password: string
  loginButtonLabel: string
  loginFooterLabel: string
  loginFooterLink: string
}

const LoginForm = ({loginHeader, email, 
  password, loginButtonLabel, loginFooterLabel, loginFooterLink}: LoginProps) => {  

  return (
    <div className="flex flex-row justify-center items-center h-full w-screen text-white">
      <div className="hidden md:flex h-full w-3/12 bg-indigo-950 p-4">
      </div>
      <form className="h-full w-full md:w-6/12 py-16 px-8 md:px-16 bg-zinc-900 flex flex-col justify-center">
        <div className="flex items-center justify-center mb-5">
          <p className="text-3xl font-medium">
            {loginHeader}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              {email}
            </label>

            <Input
            placeholder={email}
            // disabled={}
            type="email"
            />
          </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium"
          >
            {password}
          </label>

          <Input
            placeholder={password}
            // disabled={}
            type="password"
            />
        </div>

        <div className="text-center">
          <Button
          onClick={() => {}}
          label={loginButtonLabel}
          secondary
          fullWidth
          large
          />

          <p className="mb-0 mt-4 pt-1 text-sm font-medium text-center">
            {loginFooterLabel}
            <Link
              href={`/register`}
              className="ml-2 text-sky-600 transition duration-150 ease-in-out hover:text-sky-700 focus:text-sky-800 active:text-sky-600 cursor-pointer"
            >
              {loginFooterLink}
            </Link>
          </p>
        </div>
      </form>
      <div className="hidden md:flex h-screen w-3/12 bg-zinc-900"></div>
    </div>
  );
};

export default LoginForm;