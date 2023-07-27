import {Link} from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" style={{backgroundColor: `rgba(0, 0, 0, 0.2)`}} >
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/"} className="btn btn-info">Back to home</Link>
                            <Link to={`/create`} className={"btn btn-success"} style={{marginLeft:20}}>Create new tour</Link>
                        </ul>
                        <form className="d-flex">
                            <Link to={`/search`} className={"btn btn-success"} style={{marginLeft:20}}>Search</Link>
                        </form>
                    </div>
                </div>
            </nav>

        </>
     )
}