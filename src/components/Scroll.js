import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ background: 'black',
                  margin: '50px',
                  overflowY: 'scroll',
                  border: '1px solid black',
                  height: '700px',
    }}>
      { props.children }
    </div>
  );
}
export default Scroll;
