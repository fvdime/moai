"use client"

import React, {useState} from 'react'
import Button from '../button'
import axios from 'axios';
import TextEditor from '../post-props/text-editor'
import { useRouter } from 'next/navigation';

const CommentForm = (postId: any) => {

  const router = useRouter()
  // console.log("aaaaaaaaaaaaaaaaaaaaaaa",postId)
  
  const [body, setBody] = useState("")


  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/comments/create', {
        body,
        postId: postId?.postId
      });

      console.log('Comment submitted successfully:', response.data);

      router.refresh()
      
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="mb-6 w-full">
      <label 
      htmlFor="comment" className="block mb-2 text-sm font-medium text-white">Your Comment</label>
      <textarea 
      id="comment"
      rows={4}
      value={body}
      onChange={(e) => setBody(e.target.value)}
      className="block p-2.5 w-full text-sm text-white bg-zinc-800 rounded-lg border border-zinc-500 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
      <div className='flex w-full justify-end mt-2'>
        <Button
          label='Post Comment'
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default CommentForm