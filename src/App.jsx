import "./App.css";
import CreateContent from "./assets/CreateContentForm";
import Header from "./assets/Header";
import LeftMenu from "./assets/LeftMenu";
import "./index.css";
import profileIcon from "/profile-icon.svg";

function App() {
  return (
    <>
     <Header />

      <div className="main-body">
        <LeftMenu />
        <div className="content-feed">
          <CreateContent />

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
