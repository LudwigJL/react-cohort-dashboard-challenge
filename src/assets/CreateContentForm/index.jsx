import profileIcon from "/profile-icon.svg";

export default function CreateContent() {
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
            />

            <button className="post-button">Post</button>
          </div>
        </>
    )
}