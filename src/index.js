import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Containers/Main"
import AddMovie from './Containers/AddMovie'
import Team from './Containers/Team'
import About from './Containers/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />} />
      <Route path="AddMovie" element={<AddMovie />} />
      <Route path="Team" element={<Team/>} />
      <Route path="About" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
);

reportWebVitals();
