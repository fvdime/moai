"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Link } from "../navigation-link";
import Image from "next/image";
import LanguageSwitcher from "../language-switcher";
import useUserState from "@/hooks/useUserState";
import axios from "axios";
import { useRouter } from "../navigation-link";
import useCreateModal from "@/hooks/useCreateModal";

type NavbarProps = {
  Search: string;
  Profile: string;
  Settings: string;
  NewPost: string;
  Logout: string;
  ContactLink: string;
  SourceLink: string;
};

const Navbar = ({
  Search,
  Profile,
  Settings,
  NewPost,
  Logout,
  ContactLink,
  SourceLink,
}: NavbarProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const CreatePostModal = useCreateModal();

  const handleClick = useCallback(() => {
    CreatePostModal.onOpen();
  }, [CreatePostModal]);

  const [user, SetUser] = useState({
    profileImage: "",
    username: "",
    email: "",
    id: "",
  });

  const image: any = useUserState((state) => state.image);
  const setImage: any = useUserState((state) => state.setImage);

  const logout = async () => {
    await fetch("/api/auth/logout");
    router.push("/");
  };

  useEffect(() => {
    axios
      .get("/api/users/getuserbytoken")
      .then((res) => {
        if (res.data?.success) {
          SetUser(res.data?.user);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setImage(user?.profileImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="mb-12">
      <nav className="dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-zinc-200 dark:border-zinc-600 py-0.5">
        <div className="max-w-screen-xl w-full flex flex-row items-center justify-between mx-auto p-2">
          <Link
            href="/"
            className="text-start text-md font-bold whitespace-nowrap text-white w-16"
          >
            .moai.
          </Link>
          {/* <div>
          <button type="button" className="md:hidden text-zinc-400 hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" className="block w-full py-2 px-4 ps-10 text-xs border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder={Search} />
            </div>
        </div> */}
          <div className="flex flex-row items-center gap-4 justify-end w-16 h-full">
            <button
              type="button"
              className="text-sm rounded-full md:me-0 focus:ring-4 focus:ring-zinc-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src={
                  image
                    ? `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${image}`
                    : "/1.png"
                }
                alt="user photo"
                height={28}
                width={28}
                className="w-7 h-7 rounded-full object-cover object-center"
              />
            </button>
            <LanguageSwitcher
              enHref={"/feed"}
              deHref={"/feed"}
              esHref={"/feed"}
              jaHref={"/feed"}
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed z-50 top-16 right-4 py-1 px-4 rounded shadow-md shadow-slate-800/70 text-base list-none divide-y bg-zinc-800 divide-zinc-700 border border-zinc-500 ">
          <div className="px-4 py-3">
            <span className="block text-sm text-white">{user?.username}</span>
            <span className="block text-xs font-semibold truncate text-zinc-400">
              {user?.email}
            </span>
          </div>
          <ul className="py-2 text-xs font-semibold">
            <li>
              <Link
                href={`/user/${user?.id}`}
                className="block px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white rounded"
              >
                {Profile}
              </Link>
            </li>
            <li>
              <Link
                href={`/user/${user?.id}`}
                className="block px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white rounded"
              >
                {Settings}
              </Link>
            </li>
            <li>
              <button
                onClick={handleClick}
                className="block w-full px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white rounded text-left"
              >
                {NewPost}
              </button>
            </li>
            <li>
              <button
                onClick={logout}
                className="block w-full px-4 py-2 mb-4 hover:bg-zinc-600 text-zinc-200 hover:text-white rounded text-left"
              >
                {Logout}
              </button>
            </li>
            <hr className="" />
            <li>
              <Link
                href="mailto:studioeloquent@gmail.com"
                className="block px-4 py-2 mt-4 hover:bg-zinc-600 text-zinc-200 hover:text-white rounded"
              >
                {ContactLink}
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/fvdime/moai"
                target="blank"
                className="block px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white rounded"
              >
                {SourceLink}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
