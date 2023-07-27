import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import DeleteTour from "../form/DeleteTour";
export default function ListTour() {
    const [students, setStudent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/tour")
            .then((res) => {
                setStudent(res.data)
            })
    }, [])
    return (
        <div className={`content`}>
            <h1 className={`h1`}>List Tour</h1>
            <table className={`table table-hover`} id={`inner-content`}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th colSpan={3}>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) =>
                    <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.title}</td>
                        <td>{student.price}</td>
                        {/*<td>{student.description}</td>*/}
                        <td>
                            <Link to={`/view/${student.id}`} className={"btn btn-info"}>Detail</Link>
                        </td>
                        <td>
                            <Link to={`/update/${student.id}`} className={"btn btn-warning"}>Update</Link>
                        </td>
                        <td>
                            <button className={"btn btn-danger"} onClick={() => {DeleteTour(student.id)}}>Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}