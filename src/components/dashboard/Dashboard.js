import React, { Component } from "react";
import { connect } from "react-redux";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    console.log(this.props.projects)
    const {projects} = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col m6 s12">
            <ProjectList Projects={projects} />
          </div>
          <div className="col m5 s12 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
