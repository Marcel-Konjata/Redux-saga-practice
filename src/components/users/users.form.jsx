import React from "react";
import { connect } from "react-redux";
import { handleUserInput, postUserAsync } from "../../redux-files/users/users.actions";

const UserForm = ({ users, handleUserInput, postUserAsync}) => {

function handleSubmit(event){
    event.preventDefault();
    postUserAsync(users.input);
}

  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <input
        type="text"
        required
        placeholder="First Name"
        name="firstName"
        value={users.input.firstName}
        onChange={event => handleUserInput(event)}
      />
      <input
        type="text"
        name="lastName"
        required
        placeholder="Last Name"
        value={users.input.lastName}
        onChange={event => handleUserInput(event)}
      />
      <button>Add Contact</button>
    </form>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const mapDispatchToPorps = {
  handleUserInput,
  postUserAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(UserForm);
