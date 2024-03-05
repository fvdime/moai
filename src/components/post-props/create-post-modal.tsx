"use client"

import useCreateModal from '@/hooks/useCreateModal'
import React, { useCallback, useState } from 'react'
import Input from '../input'
import Modal from '../modal'
import TextEditor from './text-editor'
import TagInput from './tag-input'
import axios from 'axios'
import { useRouter } from "@/components/navigation-link";
import Link from 'next/link'

type PostModalProps = {
  Title: string;
  ButtonLabel: string;
  TagLabel: string;
  TitleInput: string;
  FooterContentI: string;
  FooterContentLink: string;
};


const PostModal = ({
  Title,
  ButtonLabel,
  TagLabel,
  TitleInput,
  FooterContentI,
  FooterContentLink,
}: PostModalProps) => {
  const router = useRouter()

  const [title, SetTitle] = useState("")

  const [tag, setTag] = useState<string[]>([])

  const [text, SetText] = useState("")

  const CreateModal = useCreateModal()

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder={TitleInput}
        type='text'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      />
      <input className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-zinc-700 border-zinc-600 placeholder-zinc-400" id="image" type="file" accept="image/*" />
      <TextEditor text={text} SetText={SetText} />
      <TagInput tag={tag} setTag={setTag} />
    </div>
  )

  const FooterContent = (
    <div className='text-gray-500 text-center mt-4'>
      <p>{FooterContentI}
        <Link
        target='_blank'
        href="https://github.com/fvdime/moai"
          className='text-white cursor-pointer hover:underline'>{FooterContentLink}</Link>
      </p>
    </div>
  )

  return (
    <Modal
      // disabled={isLoading}
      isOpen={CreateModal.isOpen}
      title={Title}
      actionLabel={ButtonLabel}
      onClose={CreateModal.onClose}
      onSubmit={() => {
        const input: any = document.getElementById("image")
        // console.log(input?.files[0])
        // console.log(title)
        // console.log(tag)
        // console.log(text)
        var resultString = tag.join(',');
        const formData = new FormData()
        formData.append("image", input?.files[0])
        formData.append("body", text)
        formData.append("hashtags", resultString)
        formData.append("title", title)
        axios.post("/api/posts/create", formData).then((res) => {
          console.log(res.data?.success)
          if (res.data?.success) {
            console.log(res?.data?.post?.id)
            setTag([])
            SetText("")
            SetTitle("")
            input.value = null
            router.push("/feed/" + res?.data?.post?.id)
            CreateModal.onClose()
          }
        }).catch((err) => {
          console.log(err)
        })
      }}
      body={bodyContent}
    />
  )
}

export default PostModal