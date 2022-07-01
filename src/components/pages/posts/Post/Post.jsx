import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={style.post}>
      <div className={style.post__top}>
        <span className={style.title}>{props.postData.title}</span>
        <span className={style.date}>{props.postData.date}</span>
      </div>
      <span className={style.text}>{props.postData.text}</span>
    </div>
  )
}

export default Post;