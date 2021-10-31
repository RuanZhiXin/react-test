import React from 'react';


const Button = React.memo((props) =>
    <button onClick={props.onClick} className="bg-white text-black m-4 p-2">
      {props.children}
    </button>
);

export default Button;
