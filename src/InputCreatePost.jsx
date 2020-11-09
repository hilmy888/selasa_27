import React, { useState } from 'react'
import Axios from 'axios'
import Cookies from 'js-cookie'

function InputCreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  function handleOnChangeTitle(e) {
    setTitle(e.target.value)
  }
  function handleOnChangeAuthor(e) {
    setAuthor(e.target.value)
  }
  function ClickToPosts() {
    const confightHeader = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    }
    // console.log(confightHeader.header.Authorization)
    const data = {
      title,
      author,
    }
    const url = 'http://localhost:3000/posts'
    Axios.post(url, data, confightHeader)
  }
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <input type="text" className="title" onChange={handleOnChangeTitle} />
        </div>
        <div>
          <div>
            <label htmlFor="author">Author</label>
          </div>
          <input type="text" className="author" onChange={handleOnChangeAuthor} />
        </div>
        <div>
          <button type="button" onClick={ClickToPosts}>Submit</button>
        </div>
      </form>
    </div>
  )
}
export default InputCreatePost
