import React from "react";
import { connect } from "react-redux";
import { UserItem } from "./user.styles";
import { removeUserAsync } from "../../redux-files/users/users.actions";

const User = ({ firstName, lastName, removeUserAsync, id }) => {
  function handleClick(id) {
    return removeUserAsync(id);
  }

  return (
    <UserItem>
      <span>
        {firstName} {lastName}
      </span>
      <button onClick={() => handleClick(id)}>delete</button>
    </UserItem>
  );
};

const mapDispatchToProps = {
  removeUserAsync
};

export default connect(
  null,
  mapDispatchToProps
)(User);
