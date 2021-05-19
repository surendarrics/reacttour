import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removetour}) => {
  const [readMore, setReadMore] = useState(false)
  return (
  <article className="single-tour">
<img src={image} alt={name}/>
<footer>
  <div className="tour-info">
<h4>{name}</h4>
<h4 classname="tour-price">${price}</h4>
  </div>
  <p>{readMore? info: `${info.substring(0, 145)}....`}
  <button onClick={()=> setReadMore(!readMore)}>{readMore?'show less': 'readmore'}
  </button>
  </p>
  <button className='delete-btn' onClick={()=> removetour(id)}>not intrested</button>
</footer>
  </article>
  );
  };

export default Tour;
