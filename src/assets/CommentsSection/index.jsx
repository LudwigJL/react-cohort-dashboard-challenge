import { useEffect, useState } from "react";
import CommentItem from "./commentItem";

export default function CommentSection({ post }) {
  const [comments, setComments] = useState([]);

  function fetchAllComments() {
    fetch(
      `https://boolean-uk-api-server.fly.dev/LudwigJL/post/${post.id}/comment`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }

  useEffect(() => {
    fetchAllComments();
  }, []);

  console.log(comments)

  
  return (
    <>

    {comments.map((comment, index) => (
      <li key={index}>
        <CommentItem comment={comment}/>
      </li>

    ))}

    </>
  );
}
