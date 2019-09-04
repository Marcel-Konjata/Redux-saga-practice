import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAsync } from "../../redux-files/users/users.actions";
import User from "./user.component";
import { StyledUserList } from "./user.styles";

class UserList extends Component {
  componentDidMount() {
    this.props.getUsersAsync();
  }

  orderedList = (listOfUsers) => {
    return listOfUsers.sort((a,b)=>{
      if(a.firstName > b.firstName) return 1
      else if(a.firstName < b.firstName) return -1
      else if(a.lastName > b.lastName) return 1
       else if(a.lastName < b.lastName) return -1
      else return 0;
    })
  }
  render() {
    const { users } = this.props;
  


    return (
      <div>
        {users.listOfUsers.length > 0 ? (
          <StyledUserList>
            {this.orderedList(users.listOfUsers).map(user => (
              <User
                key={user.id}
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
              />
            ))}
          </StyledUserList>
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  getUsersAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
