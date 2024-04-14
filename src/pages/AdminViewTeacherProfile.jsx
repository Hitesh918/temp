import React from 'react'
import Header from '../components/Header';
import AdminSideBar from '../components/AdminSideBar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminViewTeacherProfile(props) {
    const [searchParams] = useSearchParams();
    const dataString = searchParams.get('data');
    const data = JSON.parse(decodeURIComponent(dataString));
    const [details, setDetails] = React.useState({})
    const [students, setStudents] = React.useState([]);


    // React.useEffect(() => {
    //     async function getTeacherDetails() {
    //         const res = await axios.get(`http://localhost:5000/adminDetails`, {
    //             params: {
    //                 adminId: data.id,
    //             }
    //         });
    //         console.log(res.data)
    //         setDetails(res.data)
    //     }
    //     async function getStudents(){
    //         try{
    //             const res = await axios.get("http://localhost:5000/getStudentsUnderTeacher" , {
    //                 params:{
    //                     adminId : data.Id,
    //                     courseId : data.cousreId
    //                 }
    //             })
    //             setStudents(res.data)
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     getTeacherDetails();
    //     getStudents()
    // }, [data.id]);
    React.useEffect(() => {
        async function fetchData() {
            try {
                const teacherRes = await axios.get(`http://localhost:5000/adminDetails`, {
                    params: {
                        adminId: data.id,
                    }
                });
                setDetails(teacherRes.data);

                const studentsRes = await axios.get("http://localhost:5000/getStudentsUnderTeacher", {
                    params: {
                        adminId: data.id,
                        courseId: data.courseId
                    }
                });
                setStudents(studentsRes.data);
                console.log(studentsRes.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
        console.log("students", students)
    }, [data.id]);

    async function handleChange(studentId, index, newValue) {
        console.log("Student ID:", studentId);
        console.log("New Value:", newValue);
        var confirmed = window.confirm("Are you sure you want to put this student into new batch?");
        if (confirmed) {
            try {
                const res = await axios.post("http://localhost:5000/changeBatch", {}, {
                    params: {
                        studentId: studentId,
                        courseId: data.id,
                        batch: newValue
                    }
                });
                console.log(res.data)
                // if(res.data === "success"){
                //     window.location.reload()
                // }
            }
            catch (error) {
                console.error('An error occurred:', error);
            }
        }
    }


    return (
        <div>
            <Header />
            {/* <AdminSideBar name={props.name} /> */}
            <section className="teacher-profile" style={{ color: 'black', padding: '20px' }}>
                <h1 className="heading" style={{ marginBottom: '20px' }}>Profile Details</h1>
                <div className="details" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
                    <div className="tutor" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        <img src={details.dp} className="image" alt="" style={{ border: '2px solid black', width: '100px', height: '100px' }} />
                        <h3>{details.name}</h3>
                        <span className="adminId1" style={{ fontSize: '20px' }}>Admin ID: {details.adminId}</span>
                        <p className="mobile1" style={{ fontSize: '20px' }}>Mobile: {details.mobile}</p>
                    </div>
                    <div className="courses" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        <h2 className="sub-heading">Courses</h2>
                        {details.courses && details.courses.map((course, index) => (
                            <div className="box" key={index} style={{ padding: '10px', border: '1px solid black', marginBottom: '20px', maxWidth: '300px', alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: '18px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
                                <h3 className="title" style={{ fontSize: '20px' }}>{course.courseName}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <br></br> <br></br>

                <h1 className="heading" style={{ marginBottom: '20px' }}>Students Assigned</h1>

                <div className='container' style={{ minWidth: "80%" }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <tr style={{ backgroundColor: '#8E44AD' }}>
                            <th style={{ padding: '10px', border: '1px solid #e8e6e6' }}>Student Id</th>
                            <th style={{ padding: '10px', border: '1px solid #e8e6e6' }}>Full Name</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone Number</th>
                            {/* <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mail ID</th> */}
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Batch</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
                        </tr>
                        {students.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{student.studentId}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{student.name}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{student.mobile}</td>
                                    {/* <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{student.email}</td> */}
                                    <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{student.batch}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black', textAlign: "center" }}>
                                        <button value={student.studentId} style={{ marginRight: "1rem" }} className="remove-btn" >Remove</button>
                                        {/* <select onChange={handleChange} style={{ marginRight: "1rem" }} className="add-btn">
                                            <option value="1">Change Batch</option>

                                            {Array.from({ length: data.numberOfBatches }, (_, i) => i + 1).map((data, index) => {
                                                return (
                                                    <option key={index} value={data}>{data}</option>
                                                )
                                             })}
                                        </select> */}
                                        <select onChange={e => handleChange(student.studentId, index, e.target.value)} style={{ marginRight: "1rem" }} className="add-btn">
                                            <option value="1">Change Batch</option>

                                            {Array.from({ length: data.numberOfBatches }, (_, i) => i + 1).map((data, index) => {
                                                return (
                                                    <option key={index} value={data}>{data}</option>
                                                )
                                            })}
                                        </select>
                                        {/* <Link to={`/ViewStudent?data=${encodeURIComponent(JSON.stringify({ "id": student.studentId }))}`} className="profile-btn">View Profile</Link> */}
                                        <button className="profile-btn" >View Profile</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>


            </section>




        </div>
    )

}

export default AdminViewTeacherProfile