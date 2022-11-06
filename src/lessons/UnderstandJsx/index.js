import React from 'react';

const UnderstandJsx = props => {
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

export default UnderstandJsx;

