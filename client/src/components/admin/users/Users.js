import React, { Component } from "react";
import UsersTable from "./UsersTable";
import { connect } from "react-redux";
import { clearErrors } from "../../../actions/logsActions";
import { resetSuccess } from "../../../actions/usersActions";

import UsersNav from "./UsersNav";
import RegisterModal from "./RegisterModal";
import EditModal from "./EditModal";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegisterModalOpen: false,
      isEditModalOpen: false,

      selectedUser: {}
    };

    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
  }

  componentWillMount() {
    if (this.props.auth.user.userType !== "admin") {
      this.props.history.push("/app");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users) {
      if (
        nextProps.users.success.isSuccessful === true &&
        nextProps.users.success.type === "edit"
      ) {
        this.setState({ isEditModalOpen: false, selectedUser: {} });

        this.props.resetSuccess();
      }
    }
  }

  toggleRegisterModal() {
    this.setState({
      isRegisterModalOpen: !this.state.isRegisterModalOpen
    });

    this.props.clearErrors();
  }

  toggleEditModal() {
    this.setState({
      isEditModalOpen: !this.state.isEditModalOpen
    });

    this.props.clearErrors();
  }

  openEditModal(user) {
    this.setState({
      isEditModalOpen: true,
      selectedUser: user
    });

    this.props.clearErrors();
  }

  render() {
    return (
      <div className="mobile-margin mx-3">
        <UsersNav toggleRegisterModal={this.toggleRegisterModal} />

        <RegisterModal
          isRegisterModalOpen={this.state.isRegisterModalOpen}
          toggleRegisterModal={this.toggleRegisterModal}
        />

        <EditModal
          selectedUser={this.state.selectedUser}
          isEditModalOpen={this.state.isEditModalOpen}
          toggleEditModal={this.toggleEditModal}
        />

        <UsersTable openEditModal={this.openEditModal} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

export default connect(
  mapStateToProps,
  { clearErrors, resetSuccess }
)(Users);
