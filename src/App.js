import React from 'react';

import './App.css';
import  UserList  from './components/users/users.list.component';
import UserForm from "./components/users/users.form";

function App() {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
