import React, { useState, useRef } from 'react';

function Input() {
  const [inputs, setInputs] = useState({
    phone: '',
    nickname: '',
  });

  const phoneInputRef = useRef();

  const { phone, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      phone: '',
      nickname: '',
    });

    phoneInputRef.current.focus();
  };

  return (
    <>
      <input
        placeholder="전화번호 입력하세요"
        value={phone}
        onChange={onChange}
        name="phone"
        ref={phoneInputRef}
      />
      <input
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={onChange}
        name="nickname"
      />
      <br />
      <b>전화번호: {phone}</b>
      <b>닉네임: {nickname}</b>
      <br />
      <button onClick={onReset}>초기화</button>
    </>
  );
}

export default Input;
