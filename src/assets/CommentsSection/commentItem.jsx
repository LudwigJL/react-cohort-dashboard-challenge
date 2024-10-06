import { useState, useContext, useEffect } from "react";
import { FeedContext } from "../../App";

export default function CommentItem( {comment} ) {
    const userContext = useContext(FeedContext);
    const [match, setMatch] = useState({
        firstName: "",
        lastName: "",
        favouriteColour: "",
        id: -1,
      });
    
      useEffect(() => {
        if (userContext.users && comment.contactId) {
          const matchingUser = userContext.users.find(
            (user) => Number(user.id) === Number(comment.contactId)
          );
          setMatch(matchingUser);
        }
      }, [userContext.users, comment.contactId]);

  
  return (
    <>
      <div className="commentSection">
        <div className="Image" style={{ backgroundColor: match.favouriteColour}}>
        {match ? <p>{match.firstName.charAt(0)}{match.lastName.charAt(0)}</p> : <p>?</p>}

        </div>
        <div className="commentBubble">
        {comment ? <p>{comment.content}</p> : <p>Loading...</p>}
        
        </div>
      </div>
    </>
  );
}
