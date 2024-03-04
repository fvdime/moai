"use client";

import Button from "../button";
import useCreateModal from "@/hooks/useCreateModal";
import React, { useCallback } from "react";

const HomePanel = () => {
  const CreatePostModal = useCreateModal();

  const handleClick = useCallback(() => {
    CreatePostModal.onOpen();
  }, [CreatePostModal]);

  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700">
      <div className="flex flex-col items-start justify-between mb-4 divide-y divide-zinc-400">
        <h5 className="text-sm font-bold leading-none text-white uppercase pb-2">
          Home
        </h5>
        <p className="text-xs font-medium text-zinc-200 pt-2">
          Create and share a post about something that confuses you!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Button label="Create Post" fullWidth onClick={handleClick} type={"button"} />
      </div>
    </div>
  );
};

export default HomePanel;
