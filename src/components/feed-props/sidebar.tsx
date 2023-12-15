"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      label: "Home",
      href: "/",
      svg: "𖦹",
    },
    {
      id: 2,
      label: "Notifications",
      href: "/notifications",
      svg: "❀",
    },
    {
      id: 3,
      label: "Home",
      href: "/a",
      svg: "✩",
    },
    {
      id: 4,
      label: "Home",
      href: "/d",
      svg: "✿",
    },
  ];

  const router = useRouter();

  const handleClick = useCallback(() => {
    // if (onClick) {
    //   return onClick();
    // }

    // if (href) {
    //   router.push(href);
    // }
  }, [router]);

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          Moai
          {sidebarItems.map((item) => (
            <div key={item.id}>
              <div onClick={handleClick} className="flex flex-row items-center">
                <div className="relative rounded-full h-14 w-12 flex items-center justify-center p-4 hover:bg-slate-800 hover:bg-opacity-10 cursor-pointer lg:hidden">
                  <p className="text-xl text-slate-800 font-semibold">
                    {item.svg}
                  </p>
                </div>
                <div className="relative lg:flex hidden items-center gap-4 p-4 rounded-full hover:bg-slate-800 hover:bg-opacity-10 cursor-pointer">
                  <p className="text-xl text-black font-semibold">{item.svg}</p>
                  <p className="text-black hidden lg:block text-sm font-semibold">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;