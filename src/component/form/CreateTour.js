import {useState, useEffect} from "react";
import axios from "axios";
import * as Yup from "yup"
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function CreateTour() {
    const navigate = useNavigate();
    const initialValue = {
        title: "",
        price: "",
        description: ""
    };

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

    const handleSubmit = ((values) => {
        axios.post("http://localhost:8080/api/tour/create", values)
            .then(() => {
                alert("Create tour success")
                navigate("/")
            })
            .catch((error) => {
                alert("Create fail" + error.messages)
            })
    });

    return (
        <>
            <h1 className={`h1`}>Add New Student</h1>
            <hr/>
            <div className={"form-create"}>
                <Formik initialValues={initialValue} validationSchema={validateSchema} onSubmit={handleSubmit}>
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