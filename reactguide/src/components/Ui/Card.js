import React from 'react'

const Card = (props) => {
  return (
    <div className="  bg-[rgb(52,50,50)] w-[50rem] max-w-[95%] mx-auto my-8 p-4  shadow-[0_1px_8px_rgba(0,0,0,0.25)] rounded-xl ">
      {props.children}
    </div>
  );
}

export default Card;
