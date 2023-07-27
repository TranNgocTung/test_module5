import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
export default function ViewTour() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [student, setStudent] = useState({
        title: "",
        price: "",
        // description: ""
    });
    useEffect(() => {
        axios.get(`http://localhost:8080/api/tour/${id}`)
            .then((res) => {
                setStudent(res.data)
            })
            .catch((error) => {
                alert("Not find" + error.messages)
            });
    }, [id]);


    const deleteTour = (id) => {
        if (window.confirm("Are you sure ?")) {
            axios.delete(`http://localhost:8080/api/tour/delete/${id}`)
                .then(() => {
                    navigate("/")
                })
        }
    }

    return (
        <>
            <div className={`profile`}>
                <h1 className={`h1`}>Detail Tour</h1>
                <hr/>
                        <table className={`table table-hover`} style={{margin: "auto", width: 500}}>
                            <tbody className={`tbody`}>
                            <tr>
                                <th>Title:</th>
                                <th>{student.title}</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Price:</th>
                                <th>{student.price}</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Description:</th>
                                <th>{student.description}</th>
                                <th></th>
                            </tr>
                                <tr style={{textAlign:"center"}}>
                                    <td>
                                        <Link to={`/update/${student.id}`} className={"btn btn-warning"}>Update</Link>
                                    </td>
                                    <td>
                                        <button className={"btn btn-danger"} onClick={() => {deleteTour(student.id)}}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </>
    )
}