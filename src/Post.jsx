import React from 'react'

const Post = ({title, body}) => {
  return (
    <div>
        <h3>{title}</h3>
        <article>{body}</article>
    </div>
  )
}

export default Post