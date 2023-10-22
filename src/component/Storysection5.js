import React from 'react'

function Storysection5(props) {
  let image = require(`../images/${props.img}`);
// console.log(image);
  return (
    <div className="story-component">
        <img src={image} alt= "story_image" />
        {/* <img src="https://source.unsplash.com/random" alt="image" /> */}
        <p>{props.name}</p>
    </div>
  )
}

export default Storysection5