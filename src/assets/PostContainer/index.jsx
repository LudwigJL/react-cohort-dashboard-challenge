import profileIcon from "/profile-icon.svg";
import { FeedContext } from "../../App";
import { useContext, useEffect, useState } from "react";

export default function PostContainer({ post }) {
  console.log("enter");

  const userContext = useContext(FeedContext);
  const [match, setMatch] = useState({
    firstName: "",
    lastName: "",
    id: -1,
  });

  useEffect(() => {
    if (userContext.users && post.contactId) {
      const matchingUser = userContext.users.find(
        (user) => Number(user.id) === Number(post.contactId)
      );
      setMatch(matchingUser);
    }
  }, [userContext.users, post.contactId]);

  return (
    <>
      <div className="post-container">
        <div className="post-overview">
          <div className="post-profile-img">
            <img src={profileIcon} />
          </div>
          {console.log(match.firstName)}
          <div className="name-title-post">
            <div className="name-post">
              <p>{match.firstName} {match.lastName}</p>
            </div>

            <div className="title-post">
              <p>{post.title}</p>
            </div>
          </div>
        </div>

        <div className="full-title-post">
          <p>{post.content}</p>
        </div>

        <hr width="100%" size="2" />

        <div className="add-comment-container">
          <div className="make-content-form">
            <div className="make-content-pr-img">
              <img src={profileIcon} alt="" />
            </div>

            <input
              type="text"
              name="add-comment"
              placeholder="Add a comment..."
            />
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
