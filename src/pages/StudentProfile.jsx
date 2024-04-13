import React from 'react'
import StudentSideBar from '../components/StudentSideBar';
import Header from '../components/Header';

function StudentProfile(props) {
   return (
      <div>
         <Header />
         <StudentSideBar name={props.name} />
         <section className="user-profile">

            <h1 className="heading">your profile</h1>

            <div className="info">

               <div className="user">
                  <img src="images/pic-1.jpg" alt="" />
                  <h3>{props.name}</h3>
                  <p>student</p>
                  <a href="/update" className="inline-btn">update profile</a>
               </div>

               <div className="box-container">

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-bookmark"></i>
                        <div>
                           <span>4</span>
                           <p>saved playlist</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">view playlists</a>
                  </div>

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-heart"></i>
                        <div>
                           <span>4</span>
                           <p>Courses opted</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">view liked</a>
                  </div>

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-comment"></i>
                        <div>
                           <span>1</span>
                           <p>Courses completed</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">view comments</a>
                  </div>

               </div>
            </div>

         </section>

      </div>
   )
}

export default StudentProfile