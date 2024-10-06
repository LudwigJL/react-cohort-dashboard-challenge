import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import LeftMenu from "./assets/LeftMenu";
import "./index.css";
import ContentFeed from "./assets/ContentFeed";
import { createContext } from "react";

const FeedContext = createContext()

function App() {

  //Setting the singed in user to contact id 1 as default.
  const signedInUsrId = 1;
  const [signedInUsr, setSignedInUsr] = useState() 


  const [posts, setPosts] = useState([])
  const [users, setUsers] =  useState([{
    firstName : '',
    lastName : '',
    id : -1,
  }])

  const fetchAllPosts = async () => {
    const response = await fetch("https://boolean-uk-api-server.fly.dev/LudwigJL/post");
    const data = await response.json();
    setPosts(data);
  }

  const fetchAllUsers = async () => {
    const response = await fetch("https://boolean-uk-api-server.fly.dev/LudwigJL/contact");
    const data = await response.json();
    setUsers(data)
  }

  const fetchSignedInUsr = async () => {
    const response = await fetch(`https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${signedInUsrId}`);
    const data = await response.json();
    setSignedInUsr(data);
  }

  useEffect(() => {
    fetchAllPosts()
    fetchAllUsers()
    fetchSignedInUsr()
    }, [])

    console.log(posts)
    console.log(users)
    console.log(signedInUsr)
    

  return (
    <>
     <Header />
      <FeedContext.Provider value={ {posts, setPosts, users, signedInUsr} }>
        <div className="main-body">
          <LeftMenu />
          <ContentFeed />
        </div>
      </FeedContext.Provider>
      
    </>
  );
}

export { App, FeedContext };
