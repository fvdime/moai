"use client";

import { Link, useRouter } from "../navigation-link";
import Button from "../button";
import Input from "../input";
// import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast"
import { useFormik } from 'formik'
import { authSchema } from "@/schemas/auth-schema";
import axios from 'axios'

type RegisterProps = {
  registerHeader: string
  username: string
  name: string
  email: string
  password: string
  registerButtonLabel: string
  registerFooterLabel: string
  registerFooterLink: string
}

type InitialValues = {
  username: string;
  email: string;
  password: string;
}

const RegisterForm = ({ registerHeader, username, email,
  password, registerButtonLabel, registerFooterLabel, registerFooterLink }: RegisterProps) => {

  const initialValues: InitialValues = {
    username: "",
    email: "",
    password: "",
  }

  const router = useRouter()

  const onSubmit = (values: InitialValues, actions: { resetForm: () => void; setSubmitting: (arg0: boolean) => void }) => {
    console.log(values)
    axios.post("/api/auth/register", values).then((res) => {
      console.log(res.data.data)
      if (res.data?.success == true) {
        localStorage.setItem("user", JSON.stringify(res.data?.data))
        toast.success('Successfully!')
        router.push("/feed")
      } else {
        actions.resetForm();
        toast.error('Permission denied!')
        actions.setSubmitting(false);
      }
    }).catch(err => {
      actions.resetForm();
      toast.error('Permission denied!')
      actions.setSubmitting(false);
    })
  };



  const { values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting, } = useFormik({
      initialValues,
      validationSchema: authSchema,
      onSubmit,
    })

  return (
    <div className="flex flex-row justify-center items-center h-full w-screen text-white">
      <div className="hidden md:flex h-full w-3/12 bg-black p-4">
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-full w-full md:w-6/12 py-16 px-8 md:px-16 bg-zinc-900 flex flex-col justify-center">
        <div className="flex items-center justify-center mb-5">
          <p className="text-3xl font-medium">
            {registerHeader}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium"
          >
            {username}
          </label>

          <Input
            placeholder={username}
            // disabled={}
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            name="username"
            id="username"
          />
        </div>

        <div className="mb-4">
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
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            id="email"
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
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            id="password"
          />
        </div>
        <Button
          label={registerButtonLabel}
          secondary
          fullWidth
          large
        />
        <p className="mb-0 mt-4 pt-1 text-sm font-medium text-center">
          {registerFooterLabel}
          <Link
            href="/login"
            className="ml-2 text-sky-700 transition duration-150 ease-in-out hover:text-sky-800 focus:text-sky-800 active:text-sky-600 cursor-pointer"
          >
            {registerFooterLink}
          </Link>
        </p>
      </form>
      <div className="hidden md:flex h-screen w-3/12 bg-zinc-900"></div>
    </div>
  );
};

export default RegisterForm;