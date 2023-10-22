import React from "react";

function Post(props) {
  let profilepic = require(`../images/${props.image}`);
  let contentpic = require(`../images/${props.post_content}`);
  let like = require(`../icons/notification.png`);
  
  return (
    <>
      <div className="post-profilepic-username">
        <img className="postProfilepic" 
        src={profilepic} 
        // src= "https://source.unsplash.com/random" 
        alt="profilepic" />
        <p>{props.username}</p>
      </div>
      <div className="postcontent">
        <img src={contentpic} alt="contentpic" />
        {/* <img src="https://source.unsplash.com/random" alt="contentpic" /> */}
      </div>
<div className="reaction">
    <img src={like} alt="like" /> 
</div>

<p>{props.likes} Likes</p>
<p>{props.username} : {props.caption}</p>
<input type="text" placeholder="Add a comment..."/>
    </>
  );
}

export default Post;
