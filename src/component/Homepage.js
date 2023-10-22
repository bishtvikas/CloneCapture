import React from "react";
import SidebarSection1 from "./SidebarSection1"
import MainsectionSection2 from "./MainsectionSection2"


function Homepage(props) {
 
  return (
    <div className="homepage-box">
      <SidebarSection1 />
      <MainsectionSection2 
      passState2_signoutHandle = {props.passState1_signoutHandle}
      />
    </div>
  );
}

export default Homepage;
