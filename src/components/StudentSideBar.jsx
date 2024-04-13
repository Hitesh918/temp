import React, { useState, useRef } from 'react'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function StudentSideBar(props) {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState("images/pic-1.jpg");
    const fileInput = useRef(null); //reference to file inpt

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
                <p className="role">student</p>
                <Link to="/StudentProfile" className="btn"> view profile</Link>
            </div>

            <nav className="navbar">
                <Link to="/student"><i className="fas fa-home"></i><span>home</span></Link>
                <Link to="/About"><i className="fas fa-question"></i><span>about</span></Link>
                <Link to="/contact"><i className="fas fa-headset"></i><span>contact us</span></Link>
                <Link to="/logout" onClick={handleLogOut}><i className="fas fa-right-from-bracket"></i><span>Log Out</span></Link>
            </nav>

        </div>
    );
}

export default StudentSideBar;
