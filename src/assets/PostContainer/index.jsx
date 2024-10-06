import { FeedContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import CommentSection from "../CommentsSection";
import AddComment from "./AddComment";
import PostOverview from "./PostOverview";

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
        <PostOverview post={post} match={match}/> 

        <hr width="100%" size="2" />
          <CommentSection post={post} />
          
        </div>
    </>
  );
}
