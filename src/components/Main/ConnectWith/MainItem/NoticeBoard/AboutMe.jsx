import React, { useState, useEffect } from "react";
import "./css/aboutMe.css";
import SubmitBtn from "./SubmitBtn";
import AboutMeTable from "./AboutMeTable";
import AboutMeWrite from "./AboutMeWrite";

function AboutMe() {
  const [posts, setPosts] = useState([]);
  const [copyPosts, setCopyPosts] = useState([]);
  const [writer, setWriter] = useState(false);
  const [aboutMetitle, setAboutMeTitle] = useState("");
  const [aboutMeContents, setAboutMeContents] = useState("");
  const dataUrl = "/db/boardData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataUrl);
      const json = await response.json();
      setPosts(json);
      setCopyPosts(json);
    })();
  }, []);

  return (
    <>
      {!writer ? (
        <div className="aboutMe_area">
          <AboutMeTable
            posts={posts}
            copyPosts={copyPosts}
            setPosts={setPosts}
            writer={writer}
            setWriter={setWriter}
          />
        </div>
      ) : (
        <div className="aboutMe_area">
          <AboutMeWrite
            aboutMetitle={aboutMetitle}
            setAboutMeTitle={setAboutMeTitle}
            aboutMeContents={aboutMeContents}
            setAboutMeContents={setAboutMeContents}
          />
          <SubmitBtn
            writer={writer}
            setWriter={setWriter}
            aboutMetitle={aboutMetitle}
            setAboutMeTitle={setAboutMeTitle}
            aboutMeContents={aboutMeContents}
            setAboutMeContents={setAboutMeContents}
          />
        </div>
      )}
    </>
  );
}

export default AboutMe;
