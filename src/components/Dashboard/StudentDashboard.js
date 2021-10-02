import React, { Fragment, useState } from "react";

function StudentDashboard() {
  return (
    <div className="App">
      <h1 className="large text-primary">Student Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome
      </p>
      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus" /> Delete My Account
        </button>
      </div>
      <Fragment>
        <p>You have not yet setup a profile, please add some info</p>
      </Fragment>
    </div>
  );
}

export default StudentDashboard;