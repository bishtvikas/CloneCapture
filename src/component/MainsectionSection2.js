import React from 'react'
import Storysection5 from './Storysection5'
import Post from './Post'
import storyData from '../storyData'
import postData from '../postData'
import Profilesection from './Profilesection'


function MainsectionSection2(props) {
    const storyDataset = storyData.map(function(items){
        return(
            <Storysection5 
                key={items.id}
                img = {items.image}
                name = {items.username}
            />
        )
    })

    const postDataset = postData.map(function(items){
        return(
            <Post 
                key={items.id}
                image = {items.image}
                username = {items.username}
                post_content = {items.post_content}
                likes = {items.likes}
                caption = {items.caption}
                commentbox={items.commentbox}
            />
        )
    })

  return (
    <section className="mainsection-section2">
        <section className="story-post-profile-section3">
          <section className="story-post-section4">
            <section className="story-section5">
              {/* <Storysection5 /> */}
     {storyDataset}
            </section>



            <section className="post-section6">
              {postDataset}
            </section>


            
          </section>
          <section className="profile-section7">
            <Profilesection 
             passState3_signoutHandle = {props.passState2_signoutHandle}
            />
          </section>
        </section>
      </section>
  )
}

export default MainsectionSection2