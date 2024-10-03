import "./App.css";
import "./index.css";
import profileIcon from "/profile-icon.svg";
import headerIcon from "/title-header.svg";

function App() {
  return (
    <>
      <div className="head-row">
        <div className="head-icon">
          <img src={headerIcon} />
        </div>
        <p3>Cohort Manager</p3>
      </div>

      <div className="main-body">
        <div className="left-menu">
          <h3>Profile</h3>
          <h3>Menu</h3>
        </div>

        <div className="content-feed">
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

          <div className="post-container">
            <div className="post-overview">
              <div className="post-profile-img">
                <img src={profileIcon} />
              </div>

              <div className="name-title-post">
                <div className="name-post">
                  <p>Sam Fletcher</p>
                </div>

                <div className="title-post">
                  <p>Ea sport is not a real game manufacturer</p>
                </div>
              </div>
            </div>

            <div className="full-title-post">
              <p>Losadkasdkda</p>
            </div>

            <hr width="100%" size="2"/>

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
        </div>
      </div>
    </>
  );
}

export default App;
