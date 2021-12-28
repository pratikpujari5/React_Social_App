import React from 'react';
import Topbar from '../../components/topbar/Topbar.js';
import Sidebar from '../../components/sidebar/Sidebar.js'
import Feedbar from '../../components/feed/Feed.js'
import Rightbar from '../../components/rightbar/Rightbar.js'
import "./home.css"
export default function Home() {
  return (
    <React.Fragment>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feedbar />
        <Rightbar />
      </div>
    </React.Fragment>
  );
}
