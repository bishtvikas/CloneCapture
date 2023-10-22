import React from 'react'

function SidebarSection1() {
    let instaLoginImage = require("../images/insta-login-image.png");
  let home = require("../icons/home.png");
  let search = require("../icons/search.png");
  let explore = require("../icons/explore.png");
  let reels = require("../icons/reels.png");
  let messages = require("../icons/messages.png");
  let notification = require("../icons/notification.png");
  let create = require("../icons/create.png");
  let hamburger = require("../icons/hamburger.png");
 
  return (
    <section className="sidebar-section1">
        <h1 className="logo">Instagram</h1>
        <div className="navigationList">
          <div className="sidebar-list-box sidebar-hover">
            <img src={home} alt="" />
            <p>home</p>
          </div>

          <div className="sidebar-list-box sidebar-hover">
            <img src={search} alt="" />
            <p>search</p>
          </div>

          <div className="sidebar-list-box sidebar-hover">
            <img src={explore} alt="" />
            <p>explore</p>
          </div>

          <div className="sidebar-list-box sidebar-hover">
            <img src={reels} alt="" />
            <p>reels</p>
          </div>

          <div className="sidebar-list-box sidebar-hover">
            <img src={messages} alt="" />
            <p>messages</p>
          </div>

          <div className="sidebar-list-box sidebar-hover">
            <img src={notification} alt="" />
            <p>notification</p>
          </div>

          <div className="sidebar-list-box sidebar-hover">
            <img src={create} alt="" />
            <p>create</p>
          </div>

          <div className="sidebar-list-box sidebar-hover ">
            <img src={instaLoginImage} alt="" className="round-profile-img"/>
            <p>profile</p>
          </div>
        </div>

        <div className="sidebar-hamburger-menu-box sidebar-hover">
            <img src={hamburger} alt="" />
            <p>More</p>
          </div>


      </section>
  )
}

export default SidebarSection1