import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';
// import PropTypes from 'prop-types';
// import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
// import Dashboard from './components/Dashboard/Dashboard';
import FacultyDashboard from './components/Dashboard/FacultyDashboard';
// import StudentDashboard from './components/Dashboard/StudentDashboard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Register/>
    <Login/>
    // <FacultyDashboard/>
  );
}

export default App;
