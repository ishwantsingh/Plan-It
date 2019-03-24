import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/actionCreators";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    //console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="white">
          <h5 className="grey-text text-darken-3">Create Project!</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.changeHandler}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProject: project => dispatch(createProject(project))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
