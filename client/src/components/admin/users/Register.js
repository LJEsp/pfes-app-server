import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import { getAllUsers } from "../../../actions/usersActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userType: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.register) {
      if (nextProps.register.success) {
        this.setState({
          userName: "",
          userType: "",
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          password: "",
          password2: "",
          errors: {}
        });
      }
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      userType: this.state.userType,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      contact: this.state.contact,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);

    this.props.getAllUsers();
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="">
        {/* <h1 className="display-4 text-center">Register</h1>
        <p className="lead text-center">Register a new user</p> */}

        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="mb-1" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.userName
              })}
              placeholder="Username"
              name="userName"
              value={this.state.userName}
              onChange={this.onChange}
            />
            {errors.userName && (
              <div className="invalid-feedback">{errors.userName}</div>
            )}
          </div>

          <div className="form-group mt-3">
            <label className="mb-1" htmlFor="userType">
              User type
            </label>

            <select
              className={classnames("form-control", {
                "is-invalid": errors.userType
              })}
              id="userType"
              name="userType"
              value={this.state.userType}
              onChange={this.onChange}
            >
              <option label=" " />
              <option value="sales">Sales</option>
              <option value="operations">Operations</option>
              <option value="viewer">Viewer</option>
              <option value="admin">Administrator</option>
            </select>

            {errors.userType && (
              <div className="invalid-feedback">{errors.userType}</div>
            )}
          </div>

          <div className="form-group">
            <label className="mb-1" htmlFor="firstName">
              Firstname
            </label>

            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.firstName
              })}
              placeholder="First name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChange}
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName}</div>
            )}
          </div>

          <div className="form-group">
            <label className="mb-1" htmlFor="lastName">
              Lastname
            </label>
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.lastName
              })}
              placeholder="Last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName}</div>
            )}
          </div>

          <div className="form-group">
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.email
              })}
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label className="mb-1" htmlFor="contact">
              Contact
            </label>

            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.contact
              })}
              placeholder="Contact"
              name="contact"
              value={this.state.contact}
              onChange={this.onChange}
            />
            {errors.contact && (
              <div className="invalid-feedback">{errors.contact}</div>
            )}
          </div>

          <div className="dropdown-divider mb-3" />

          <div className="form-group">
            <label className="mb-1" htmlFor="password">
              Password{" "}
              <small className="text-muted">
                (Must be at least 6 characters)
              </small>
            </label>
            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />

            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="form-group">
            <label className="mb-1" htmlFor="password2">
              Confirm password
            </label>

            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.password2
              })}
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>

          <input
            type="submit"
            value="Register User"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  register: state.register
});

export default connect(
  mapStateToProps,
  {
    registerUser,
    getAllUsers
  }
)(withRouter(Register));
