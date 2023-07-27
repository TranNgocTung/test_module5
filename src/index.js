import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListTour from "./component/view/ListTour";
import CreateTour from "./component/form/CreateTour";
import SearchTour from "./component/form/SearchTour";
import UpdateTour from "./component/form/UpdateTour";
import ViewTour from "./component/view/ViewTour";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import DeleteTour from "./component/form/DeleteTour";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path={"/"}element={<ListTour/>}></Route>
              <Route path={"/create"} element={<CreateTour/>}></Route>
              <Route path={"/search"} element={<SearchTour/>}></Route>
              <Route path={`/update/:id`} element={<UpdateTour/>}></Route>
              <Route path={`/view/:id`} element={<ViewTour/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
