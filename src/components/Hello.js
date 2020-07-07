import React from 'react';

function Hello({ name, color, isRequired }) {
  return (
    <>
      <div style={{ color: color }}>
        {isRequired && <b style={{ color: 'red' }}>*</b>}
        안녕하세요 {name}{' '}
      </div>
    </>
  );
}

Hello.defaultProps = {
  name: '이름 없음',
};

export default Hello;
