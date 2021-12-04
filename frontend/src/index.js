import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import VideoList from './component/Video/VideoList';
import VideoForm from './component/Video/VideoForm';
import Navbar from './component/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar />

    <div className="container p-4">

        <Routes>
        {/* rutas */}
          <Route path="/" element={<VideoList />} />
          <Route path="/new-video" element={<VideoForm />} />
          <Route path="/update/:id" element={<VideoForm />} />
        </Routes>

        {/* para la alerta de cracion de video */}
        <ToastContainer /> 

        {/* <div className="row">
          <div className="col col-4">A</div>
          <div className="col col-4">A</div>
          <div className="col col-4">A</div>
        </div> */}
      </div>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
