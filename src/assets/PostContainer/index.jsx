import { FeedContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import CommentSection from "../CommentsSection";
import AddComment from "./AddComment";

export default function PostContainer({ post }) {
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
          <div
            className="Image"
            style={{
              backgroundColor: match ? match.favouriteColour : "FFFFF",
            }}
          >
            {match ? (
              <p>
                {match.firstName.charAt(0)}
                {match.lastName.charAt(0)}
              </p>
            ) : (
              <p>Loading user... </p>
            )}
          </div>
          <div className="name-title-post">
            <div className="name-post">
              {match ? (
                <p>
                  {match.firstName} {match.lastName}
                </p>
              ) : (
                <p>Loading user... </p>
              )}
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
          <CommentSection post={post} />
          <AddComment post={post}/>
        </div>
    </>
  );
}
