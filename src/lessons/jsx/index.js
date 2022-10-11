import React from 'react';

const Jsx = props => {
    console.log(props.name);
    return (
        <div className="wrapper">
        <textarea
          readOnly
          maxLength={3}
          spellCheck
          style={{ backgroundColor: 'gray' }}
          />
        </div>
    );
};

export default Jsx;

