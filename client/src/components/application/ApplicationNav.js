import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";

class ApplicationNav extends Component {
  constructor() {
    super();
    this.state = {
      active: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    } else {
      this.setState({ active: this.props.location.pathname });
    }
  }

  componentWillUnmount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/app");
    }
  }

  handleClick(item) {
    this.setState({ active: item });
  }

  render() {
    const { auth } = this.props;

    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={classnames("nav-link", {
              active: this.state.active === "/app/logs"
            })}
            to="/app/logs"
            onClick={() => this.handleClick("/app/logs")}
          >
            Logs
          </Link>
        </li>

        {auth.user.userType === "admin" ? (
          <li className="nav-item">
            <Link
              className={classnames("nav-link", {
                active: this.state.active === "/app/users"
              })}
              to="/app/users"
              onClick={() => this.handleClick("/app/users")}
            >
              Users
            </Link>
          </li>
        ) : null}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(ApplicationNav);
