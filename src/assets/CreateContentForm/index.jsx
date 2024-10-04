import { useContext, useEffect, useState } from "react";
import profileIcon from "/profile-icon.svg";
import { FeedContext } from "../../App";

export default function CreateContent() {
  //Setting initial data here as contactId 1, which is the logged in user.
  const initialData = {
    title: "",
    content: "",
    contactId: 1,
  };

  const [postData, setPostData] = useState(initialData);
  const context = useContext(FeedContext)

    function sendPostRequest() {
    console.log("Sending ... ");
    console.log(postData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };

    fetch(
      "https://boolean-uk-api-server.fly.dev/LudwigJL/post",
      requestOptions)
      .then(context.setPosts(context.posts))
  }

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    console.log(inputName, inputValue);

    if (inputName == "post-comment") {
      const content = inputValue;
      const title = content.split(" ").slice(0, 6).join(" ");
      setPostData({ ...postData, content: content, title: title });
    }
  }

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/LudwigJL/post")
    .then(res => res.json())
    .then(res => context.setPosts(res))
  }, [context.setPosts])

  return (
    <>
      <div className="make-content-form">
        <div className="make-content-pr-img">
          <img src={profileIcon} alt="" />
        </div>

        <input
          type="text"
          name="post-comment"
          placeholder="What's on your mind?"
          onChange={handleChange}
        />

        <button onClick={sendPostRequest} className="post-button">
          Post
        </button>
      </div>
    </>
  );
}
