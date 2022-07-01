import React from "react";
import style from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {
  let posts = props.state.posts
    .map(post => <Post postData={post}/>);

  return (
    <main className={style.main}>
      <div className={style.profile}>
        <div className={style.profile__img}><img src={props.state.profile.photo} alt=""/></div>
        <div className={style.profile__inf}>
          <span>{props.state.profile.name}</span>
          <span>{props.state.profile.age}, {props.state.profile.city}</span>
        </div>
      </div>
      <div className={style.posts}>
        <div className={style.button__wrapper}>
          <button>Добавить</button>
        </div>
        {posts}
      </div>
    </main>
  )
}

export default Posts;