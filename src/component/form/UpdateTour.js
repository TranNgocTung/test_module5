import {useState, useEffect} from "react";
import * as Yup from "yup";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";

export default function UpdateTour() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [initialValues, setInitialValues] = useState({
        title: "",
        price: "",
        description: ""
    })
    const validateSchema = Yup.object({
        title: Yup.string()
            .required("Title is required")
            .matches(/^[a-zA-ZÀ-ỹ\s]{6,}$/, "Name must contain only letters"),
        price: Yup.number()
            .min(100000, "Min price is 100")
            .max(100000000, "Max price is 100")
            .required("Price is required"),
        description: Yup.string()
            .required("Description is required")
            .matches(/^[a-zA-ZÀ-ỹ\s]{6,}$/, "Description must contain only letters")
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tour/${id}`)
            .then((res) => {
                setInitialValues({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                });
                setLoading(false);
            })
    }, [id]);

    const handelSubmit = (values) => {
        axios.put(`http://localhost:8080/api/tour/update/${id}`, values)
            .then(() => {
                alert("Update success")
                navigate("/")
            })
            .catch((error) => {
                alert("Not Found" + error.messages)
            })
    };
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>Update student</h1>
            <hr/>
            <div className={"form-update"}>
                <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={handelSubmit}>
                    <Form encType="multipart/form-data">
                        <div className="mb-3 row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">
                                Title
                            </label>
                            <div className="col-sm-10">
                                <Field type="text" name="title" className="form-control"/>
                                <ErrorMessage name="title" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="price" className="col-sm-2 col-form-label">
                                Price
                            </label>
                            <div className="col-sm-10">
                                <Field type="number" name="price" className="form-control"/>
                                <ErrorMessage name="price" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="description" className="col-sm-2 col-form-label">
                                Description
                            </label>
                            <div className="col-sm-10">
                                <Field type="text" name="description" className="form-control"/>
                                <ErrorMessage name="description" component="div" className="text-danger"/>
                            </div>
                            {/*<div className="col-sm-10">*/}
                            {/*    <textarea name="description" className="form-control"></textarea>*/}
                            {/*    <ErrorMessage name="description" component="div" className="text-danger"/>*/}
                            {/*</div>*/}
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width: 400, marginLeft: 200}}>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}