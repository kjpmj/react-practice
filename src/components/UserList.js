import React from 'react';

function User({ user }) {
  return (
    <>
      <div>이름: {user.name}</div>
      <div>이메일: {user.email}</div>
    </>
  );
}

function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
}

export default UserList;
