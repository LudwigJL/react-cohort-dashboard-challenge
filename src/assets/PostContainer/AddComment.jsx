import { useContext, useEffect, useState } from "react";
import { FeedContext } from "../../App";
export default function AddComment( {post} ) {
  const context = useContext(FeedContext)
  const signedInUsr = context.signedInUsr;

  const initialData = {
    postId: post.id,
    contactId: signedInUsr.id,
    content : ''
  }

  const [commentData, setCommentData] = useState(initialData);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    console.log(inputName, inputValue)

    if(inputName == "add-comment"){
      setCommentData({...commentData, content: inputValue})
    }
  }

  const postComment = async (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData),
    };

    const response = await fetch(`https://boolean-uk-api-server.fly.dev/LudwigJL/post/${post.id}/comment`, requestOptions);
    const data = await response.json();
    console.log(data)

    //await fetch(`https://boolean-uk-api-server.fly.dev/LudwigJL/post/${post.id}/comment`)
  }

  return (
    <>
      <div className="make-content-form">
        <div className="make-content-pr-img">
          <p>O</p>
        </div>

        <input 
        type="text" 
        name="add-comment" 
        placeholder="Add a comment..."
        onChange={handleChange} />
        <button onClick={postComment} className="send-button">Send</button>
      </div>
    </>
  );
}
