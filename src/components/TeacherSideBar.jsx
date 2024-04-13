import React, { useState, useRef } from 'react'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TeacherSideBar(props) {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState("images/pic-1.jpg");
    const fileInput = useRef(null); //reference to file input

    function handleLogOut(e) {
        e.preventDefault()
        signOut(auth)
            .then(() => {
                setTimeout(() => {
                    navigate("/login", { replace: true });
                }, 1000)
            })
            .catch((e) => {
                alert(e)
            })
    }

    function handleProfilePicChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <div className="side-bar">

            <div id="close-btn">
                <i className="fas fa-times"></i>
            </div>

            <div className="profile">
                <img src={profilePic} className="image" alt="" title="Click here to change profile picture." onMouseOver={() => document.getElementById('profilePicInput').style.display = 'block'} onMouseOut={() => document.getElementById('profilePicInput').style.display = 'none'} onClick={() => fileInput.current.click()} />
                <input type="file" id="profilePicInput" style={{display: 'none'}} onChange={handleProfilePicChange} ref={fileInput} />
                <h3 className="name">{props.name}</h3>
                <p className="role">Teacher</p>
                <Link to="/teacherprofile" className="btn">View Profile</Link>
            </div>

            <nav className="navbar"> 
                <Link to="/teacher"><i className="fas fa-home"></i><span>Home</span></Link>
                {/* <Link to="/createAssignment"><i className="fas fa-plus"></i><span>Create new Batch</span></Link> */}
                <Link to="/createAssignment"><i className="fas fa-plus"></i><span>Create Assignment</span></Link>
                <Link to="/createTest"><i className="fas fa-plus"></i><span>Create Test</span></Link>
                <Link to="/logout" onClick={handleLogOut}><i className="fas fa-right-from-bracket"></i><span>Log Out</span></Link>
            </nav>

        </div>
    );
}

export default TeacherSideBar;
