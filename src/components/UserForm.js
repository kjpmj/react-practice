import React from 'react';

function UserForm({ name, email, onChange, onCreate }) {
  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} value={name} />
      <input
        placeholder="이메일"
        name="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default UserForm;
