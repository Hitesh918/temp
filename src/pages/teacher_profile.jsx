import React from 'react'

function contact(){
    return(
        <div>


<div className="side-bar">

   <div id="close-btn">
      <i className="fas fa-times"></i>
   </div>

   <div className="profile">
      <img src="images/pic-1.jpg" className="image" alt=""/>
      <h3 className="name">Swami</h3>
      <p className="role">Teacher</p>
      <a href="/profile" className="btn">View Profile</a>
   </div>

   <nav className="navbar">
      <a href="/"><i className="fas fa-home"></i><span>Home</span></a>
      <a href="/about"><i className="fas fa-question"></i><span>About</span></a>
      <a href="/courses"><i className="fas fa-graduation-cap"></i><span>Courses</span></a>
      <a href="/teachers"><i className="fas fa-chalkboard-user"></i><span>Teachers</span></a>
      <a href="/contact"><i className="fas fa-headset"></i><span>Contact Us</span></a>
   </nav>

</div>

<section className="teacher-profile">

   <h1 className="heading">Profile Details</h1>

   <div className="details">
      <div className="tutor">
         <img src="images/pic-2.jpg" alt=""/>
         <h3>John dDeo</h3>
         <span>Teacher</span>
      </div>
      <div className="flex">
         <p>Total Playlists : <span>4</span></p>
         <p>Total Videos : <span>18</span></p>
      </div>
   </div>

</section>

<section className="courses">

   <h1 className="heading">Courses</h1>

   <div className="box-container">

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-1.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Basic - B1, B2</h3>
         <a href="/playlist" className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-2.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title"> Level 1 </h3>
         <a href="/playlist" className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-3.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Level 2</h3>
         <a href="/playlist" className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-4.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Level 3</h3>
         <a href="/playlist" className="inline-btn">View Playlist</a>
      </div>

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-4.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Level 4</h3>
         <a href="/playlist" className="inline-btn">View Playlist</a>
      </div>

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-4.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Level 5</h3>
         <a href="/playlist" className="inline-btn">View Playlist</a>
      </div>

      <div className="box">
         <div className="thumb">
            <img src="images/thumb-4.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Level 6</h3>
         <a href="/playlist" className="inline-btn">View Playlist</a>
      </div>

   </div>

</section>














</div>
    )
}

export default contact