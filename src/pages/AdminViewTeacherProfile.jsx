import React from 'react'
import Header from '../components/Header';
import AdminSideBar from '../components/AdminSideBar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function AdminViewTeacherProfile(props) {
    const [searchParams] = useSearchParams();
    const dataString = searchParams.get('data');
    const data = JSON.parse(decodeURIComponent(dataString));
    const [details, setDetails] = React.useState({})

    React.useEffect(() => {
        async function getTeacherDetails() {
            const res = await axios.get(`http://localhost:5000/adminDetails`, {
                params: {
                    adminId: data.id,
                }
            });
            console.log(res.data)
            setDetails(res.data)
        }
        getTeacherDetails();
    }, [data.id]);

    console.log(data)

    return (
        <div>
            <Header />
            <AdminSideBar name={props.name} />
            <section className="teacher-profile">
                <h1 className="heading">Profile Details</h1>
                <div className="details">
                    <div className="tutor">
                        <img src={details.image} className="image" alt=""/>
                        <h3>{details.name}</h3>
                        <span className="adminId">Admin ID: {details.adminId}</span>
                        <p className="mobile">Mobile: {details.mobile}</p>
                    </div>
                    <div className="courses">
                        <h2 className="sub-heading">Courses</h2>
                        {details.courses && details.courses.map((course, index) => (
                            <div className="box" key={index}>
                                <h3 className="title">{course.courseName}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default AdminViewTeacherProfile