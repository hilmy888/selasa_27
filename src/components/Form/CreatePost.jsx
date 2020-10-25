import React from 'react'
import { useForm } from 'react-hook-form'
import { createPost } from '../../services/api'

export default function CreatePost() {
  const {register, handleSubmit } = useForm()


  return (
    <form onSubmit={handleSubmit(createPost)}>
      <div>
        <label>Title</label>
        <input type="text" name="title" ref={register} />
      </div>
      <div>
        <label>Author</label>
        <input type="text" name="author" ref={register} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  )
}
