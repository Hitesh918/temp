import React from 'react'
import StudentSideBar from '../components/StudentSideBar';
import Header from '../components/Header';

function StudentProfile(props) {
   return (
      <div>
         <Header />
         {/* <StudentSideBar name={props.name} /> */}
         <section className="user-profile">

            <h1 className="heading">Your Profile</h1>

            <div className="info">

               <div className="user">
                  <img src="images/pic-1.jpg" alt="" />
                  <h3>{props.name}</h3>
                  <p>Student</p>
                  <a href="/update" className="inline-btn">Update Profile</a>
               </div>

               <div className="box-container">

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-bookmark"></i>
                        <div>
                           <span>4</span>
                           <p>Saved Playlist</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">View Playlists</a>
                  </div>

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-heart"></i>
                        <div>
                           <span>4</span>
                           <p>Courses Opted</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">View Liked</a>
                  </div>

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-comment"></i>
                        <div>
                           <span>1</span>
                           <p>Courses Completed</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">View Comments</a>
                  </div>

               </div>
            </div>

         </section>

      </div>
   )
}

export default StudentProfile