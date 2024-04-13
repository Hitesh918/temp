import React from 'react'
import Header from '../components/Header';
import TeacherSideBar from '../components/TeacherSideBar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { set } from 'firebase/database';

function ViewStudent(props) {
    const [searchParams] = useSearchParams();
    const dataString = searchParams.get('data');
    const data = JSON.parse(decodeURIComponent(dataString));
    const [students, setStudents] = React.useState([]);

    // React.useEffect(() => {
    //     async function getCourseDetails() {
    //         const res = await axios.get(`http://localhost:5000/getStudentList`, {
    //             params: {
    //                 courseId: data.id,
    //                 adminId: data.adminId,
    //                 batch: data.batch
    //             }
    //         });
    //         setStudents(res.data)
    //     }
    //     getCourseDetails();
    // }, [data.id, data.batch, data.adminId]);

    // async function startGoogleMeetCall() {
    //     try {
    //         const resp = await axios.get("http://localhost:4000/api/createMeeting");
    //         console.log(resp.data)
    //         window.open(resp.data.meetingLink, "_blank")
    //     }
    //     catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // }
    // console.log(resources)
    console.log(data)

    return (

        <div>
            <Header />
            <TeacherSideBar name={props.name} />

            <section className="playlist-details">

                <h1 className="heading">Student Profile</h1>
                <div >


                </div>
            </section>
        </div>
    )
}

export default ViewStudent