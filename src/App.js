import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import Input from './components/Input';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  const [users, setUsers] = useState([
    { id: 1, name: 'a', email: 'kjpmj@tnctec.co.kr' },
    { id: 2, name: 'b', email: 'kjpmj@tnctec.co.kr' },
    { id: 3, name: 'c', email: 'kjpmj@tnctec.co.kr' },
    { id: 4, name: 'd', email: 'kjpmj@tnctec.co.kr' },
  ]);

  const nextId = useRef(5);

  const { name, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = { id: nextId.current, name, email };

    setUsers(users.concat(user));

    setInputs({
      name: '',
      email: '',
    });

    nextId.current += 1;
  };

  return (
    <>
      <UserForm
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
