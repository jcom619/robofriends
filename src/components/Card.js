import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-lightest-blue br3 pa3 ma2 dib f1  grow bw2 shadow-5'>
      <img src={`https://robohash.org/${ id }?size=200x200`} alt='HiMundo!'/>
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  );
}

export default Card;
